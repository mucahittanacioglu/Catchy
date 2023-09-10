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
    //TODO: child state leri update olduktan sonra burda tut
    //TODO: güncellenmiş en son profil verilerini reduxa yaz
    return (
        <div className="profilePage ">
            <MDBContainer className="py-5 justify-content-center align-items-center h-100 mx-5">
                <MDBRow>
                    <MDBCard>
                        <MDBCardBody className="text-black p-4">
                            <ProfileHeader isEditing={isEditing}/>
                            <ProfileBody isEditing={isEditing}/>
                            <ProfileFooter/>
                            {
                                isEditing ? (
                                    <MDBBtn outline color="success" onClick={() => setIsEditing(false)}
                                            style={{height: '36px', overflow: 'visible'}}>
                                        Update profile
                                    </MDBBtn>
                                ) : (
                                    <MDBBtn outline color="dark" onClick={() => setIsEditing(true)}
                                            style={{height: '36px', overflow: 'visible'}}>
                                        Edit profile
                                    </MDBBtn>)
                            }
                        </MDBCardBody>
                    </MDBCard>
                </MDBRow>
            </MDBContainer>
        </div>

    );
};

export default Profile;

