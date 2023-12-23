import React, {useState} from 'react';
import {MDBCardText} from "mdb-react-ui-kit";
import './bodyProfile.css'

const ProfileBody = (props) => {

    const {profileData} = props;
    const {isEditing} = props;

    const [about, setAbout] = useState(profileData.about);


    return (
        <div>
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
        </div>
    );
};

export default ProfileBody;