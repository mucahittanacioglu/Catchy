import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody, MDBBtn,
} from 'mdb-react-ui-kit';
import {useState} from "react";
import './profile.css'
import ProfileHeader from "./header/profileHeader.jsx";
import ProfileFooter from "./footer/profileFooter.jsx";
import ProfileBody from "./body/profileBody.jsx";

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

    return (
        <div className="profilePage ">
            <MDBContainer className="py-5 justify-content-center align-items-center h-100 mx-5">
                <MDBRow>
                    <MDBCard>
                        <MDBCardBody className="text-black p-4">
                            <ProfileHeader/>
                            <ProfileBody/>
                            <ProfileFooter/>
                            <MDBBtn outline color="dark" onClick={handleEditClick} style={{height: '36px', overflow: 'visible'}}>
                                Edit profile
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBRow>
            </MDBContainer>
        </div>

    );
};

export default Profile;

