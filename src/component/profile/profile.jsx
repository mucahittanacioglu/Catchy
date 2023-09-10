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
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './profile.css'

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Andy Horwitz');
    const [city, setCity] = useState('New York');
    const [backgroundColor, setBackgroundColor] = useState('#000');
    const [photo, setPhoto] = useState('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp');
    const [newPhoto, setNewPhoto] = useState('');
    const [about, setAbout] = useState('Benim hakkımda');
    const [showAllPhotos, setShowAllPhotos] = useState(false);


    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    }

    const handleShowAllPhotosClick = () => {
        setShowAllPhotos(!showAllPhotos);
    }

    return (
        <div className="profilePage ">
            <MDBContainer className="py-5 justify-content-center align-items-center h-100 mx-5">
                <MDBRow>
                    <MDBCard>
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
                        <MDBCardBody className="text-black p-4">
                            <div className="mb-5">
                                <p className="lead fw-normal mb-1">About</p>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                        style={{width:'100%' , height:150}}/>
                                ) : (<div className="p-4" style={{backgroundColor: '#f8f9fa'}}>
                                    <MDBCardText className="font-italic mb-1">{about}</MDBCardText>
                                </div>)}
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                                <MDBCardText className="mb-0"><a href="#!">
                                    <button className="btn btn-link"
                                            onClick={handleShowAllPhotosClick}>
                                        {showAllPhotos ? <RemoveIcon/> : <AddIcon/>}
                                    </button>
                                </a></MDBCardText>
                            </div>
                            <MDBRow className={`photo-row ${showAllPhotos ? 'show-photos': ''}`}>
                                {(showAllPhotos || isEditing) && (
                                    <>
                                        <MDBCol className="mb-2">
                                            <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                                          alt="image 1" className="w-100 rounded-3"/>
                                        </MDBCol>
                                        <MDBCol className="mb-2">
                                            <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                          alt="image 1" className="w-100 rounded-3"/>
                                        </MDBCol>
                                        <MDBRow className="g-2">
                                            <MDBCol className="mb-2">
                                                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                                              alt="image 1" className="w-100 rounded-3"/>
                                            </MDBCol>
                                            <MDBCol className="mb-2">
                                                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                                              alt="image 1" className="w-100 rounded-3"/>
                                            </MDBCol>
                                        </MDBRow>
                                    </>
                                )}
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBRow>
            </MDBContainer>
        </div>

    );
};

export default Profile;

