import React, {useState} from 'react';
import {MDBCardImage, MDBCardText, MDBCol, MDBRow} from "mdb-react-ui-kit";
import RemoveIcon from "@mui/icons-material/Remove.js";
import AddIcon from "@mui/icons-material/Add.js";
import './footerProfile.css'

const ProfileFooter = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [showAllPhotos, setShowAllPhotos] = useState(false);

    const handleShowAllPhotosClick = () => {
        setShowAllPhotos(!showAllPhotos);
    }

    return (
        <div>
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
                    </>
                )}
            </MDBRow>
        </div>
    );
};

export default ProfileFooter;