import {
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBTypography
} from 'mdb-react-ui-kit';
import {useEffect, useState} from "react";
import './headerProfile.css'
import {Button} from "@mui/material";
import * as postActions from "../../redux/actions/postActions.js";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const ProfileHeader = (props) => {

    const {isEditing} = props;

    const [name, setName] = useState('Andy Horwitz');
    const [city, setCity] = useState('New York');
    const [backgroundColor, setBackgroundColor] = useState('#000');
    /*const [photo, setPhoto] = useState();*/
    /*const [newPhoto, setNewPhoto] = useState('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp');*/
    const uploadPhoto = (e) => {
        const newPhotoURL = URL.createObjectURL(e.target.files[0]);

        props.actions.setProfilePhoto(newPhotoURL);

    }
   /* useEffect(() => {
        setPhoto(newPhoto);
    }, [isEditing]);*/
    return (

        <div>
            <div className="rounded-top text-white d-flex flex-row"
                 style={{backgroundColor: backgroundColor, height: '200px'}}>

                {isEditing ? (
                    <>
                        <div className="ms-4 mt-5 d-flex flex-column" style={{width: '150px'}}>
                            <input
                                type="color"
                                value={backgroundColor}
                                onChange={(e) => setBackgroundColor(e.target.value)}
                                className="colorInput"
                            />

                            <MDBCardImage
                                src={props.profilePhoto}
                                alt="Generic placeholder image"
                                fluid
                                className="mt-4 mb-2 img-thumbnail"
                                style={{width: '50px', height: '50', objectFit: 'cover', zIndex: '1'}}/>

                            <input
                                accept="image/*"
                                style={{display: 'none'}}
                                id="raised-button-file"
                                type="file"
                                onChange={uploadPhoto}
                            />
                            <label htmlFor="raised-button-file">
                                <Button type="button" variant="raised" component="span">
                                    Upload
                                </Button>
                            </label>
                            {/*<input*/}
                            {/*    type="file"*/}
                            {/*    accept="image/*"*/}
                            {/*    onChange={(e) => setNewPhoto(URL.createObjectURL(e.target.files[0]))}/>*/}
                            {/*<button onClick={() => setPhoto(newPhoto)}>Upload</button>*/}
                        </div>
                        <div className="ms-3" style={{marginTop: '130px'}}>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}/>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}/>

                        </div>
                    </>
                ) : (
                    <>
                        <div className="ms-4 mt-5 d-flex flex-column" style={{width: '150px'}}>
                            <MDBCardImage
                                src={props.profilePhoto}
                                alt="Generic placeholder image"
                                fluid
                                className="mt-4 mb-2 img-thumbnail"
                                style={{width: '150px', height: '150px', objectFit: 'cover', zIndex: '1'}}/>
                        </div>
                        <div className="ms-3" style={{marginTop: '130px'}}>
                            <MDBTypography tag="h5">{name}</MDBTypography>
                            <MDBCardText>{city}</MDBCardText>
                        </div>
                    </>
                )}


            </div>


            <div className="p-4 text-black" style={{backgroundColor: '#f8f9fa'}}>
                <div className="d-flex justify-content-end text-center py-1">
                    <div>
                        <MDBCardText className="mb-1 h5">253</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                    </div>
                    <div className="px-3">
                        <MDBCardText className="mb-1 h5">1026</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                    </div>
                    <div>
                        <MDBCardText className="mb-1 h5">478</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                    </div>
                </div>
            </div>
        </div>
    );
};



function mapDispatchToProps(dispatch) {
    return {
        actions: {
            setProfilePhoto: bindActionCreators(postActions.setProfilePhoto, dispatch)
        }
    };
}

function mapStateToProps (state)  {
    return {
        profilePhoto: state.setProfilePhoto
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);