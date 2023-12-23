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

    const [profileData] = useState(
        {
            userName: "Andy Horwitz",
            userCity:"Los Angelos",
            photos: 253,
            followers: 1025,
            following: 478,
            about:"About me",
            bgColor:"#000000",
            profilePhoto:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
            ownProfile: true,
        },
    );

    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className="profilePage ">
            <MDBContainer className="py-5 justify-content-center align-items-center h-100 mx-5" style={{opacity:0.85}}>
                <MDBRow>
                    <MDBCard>
                        <MDBCardBody className="text-black p-4">
                            <ProfileHeader isEditing={isEditing} profileData={profileData}/>
                            <ProfileBody isEditing={isEditing} profileData={profileData}/>
                            <ProfileFooter/>
                            {
                                profileData.ownProfile &&
                                (isEditing ? (
                                    <MDBBtn outline color="success" onClick={() => setIsEditing(false)}
                                            style={{height: '36px', overflow: 'visible'}}>
                                        Update profile
                                    </MDBBtn>
                                ) : (
                                    <MDBBtn outline color="dark" onClick={() => setIsEditing(true)}
                                            style={{height: '36px', overflow: 'visible'}}>
                                        Edit profile
                                    </MDBBtn>))
                            }
                        </MDBCardBody>
                    </MDBCard>
                </MDBRow>
            </MDBContainer>
        </div>

    );
};

export default Profile;

