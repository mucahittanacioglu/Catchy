import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBTypography
} from 'mdb-react-ui-kit';
import {useState} from "react";
import './profile.css'
const ProfileHeader = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Andy Horwitz');
    const [city, setCity] = useState('New York');
    const [backgroundColor, setBackgroundColor] = useState('#000');
    const [photo, setPhoto] = useState('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp');
    const [newPhoto, setNewPhoto] = useState('');

    return (
        <div>
            <div className="rounded-top text-white d-flex flex-row"
                 style={{backgroundColor: backgroundColor, height: '200px'}}>
                {isEditing ? (
                    <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="colorInput"
                    />
                ) : (
                    null
                )}
                <div className="ms-4 mt-5 d-flex flex-column" style={{width: '150px'}}>
                    {isEditing ? (
                        <div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setNewPhoto(URL.createObjectURL(e.target.files[0]))}/>
                        </div>
                    ) : (
                        <MDBCardImage
                            src={photo}
                            alt="Generic placeholder image"
                            fluid
                            className="mt-4 mb-2 img-thumbnail"
                            style={{width: '150px', height: '150px', objectFit:'cover', zIndex: '1'}}/>

                    )}

                    {isEditing && (
                        <button onClick={() => setPhoto(newPhoto)}>Upload</button>
                    )}


                    {!isEditing && (
                        <MDBBtn outline color="dark" onClick={handleEditClick} style={{height: '36px', overflow: 'visible'}}>
                            Edit profile
                        </MDBBtn>

                    )}
                </div>
                <div className="ms-3" style={{marginTop: '130px'}}>
                    {isEditing ? (
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    ) : (
                        <MDBTypography tag="h5">{name}</MDBTypography>
                    )}
                    {isEditing ? (
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}/>
                    ) : (
                        <MDBCardText>{city}</MDBCardText>
                    )}
                </div>
            </div>
            <div className="p-4 text-black" style={{backgroundColor: '#f8f9fa'}}>
                {isEditing ? (
                    <MDBBtn outline color="success" onClick={handleSaveClick} style={{height: '36px', overflow: 'visible'}}>
                        Update
                    </MDBBtn>
                ) : null}
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

export default ProfileHeader;