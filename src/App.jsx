import './App.css'
import CustomNav from './component/CustomNav'
import {AiFillDashboard, AiFillHeart, AiOutlineNotification, AiOutlineUser} from "react-icons/ai"
import {BsSearch} from "react-icons/bs";
import {BiMessageAlt} from "react-icons/bi";
import 'react-bootstrap/dist/react-bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Container, Row} from "react-bootstrap";
import Login from "./component/login/login.jsx";
import SignUp from "./component/sign-up/sign-up.jsx";
import {Routes, Route, Link} from 'react-router-dom';
import CreatePost from "./component/post/createPost/CreatePost.jsx";
import Profile from "./component/profile/profile.jsx"
import Message from "./component/message/message.jsx";
import Notifications from "./component/notifications/notifications.jsx";
import {useState} from "react";
import Settings from "./component/settings/settings.jsx";
import {Grid} from "@mui/material";
import Chat from "./component/chat/chat.jsx";

//TODO:Need Log-in and Sing-up page.
function App() {
    const [isActive, setIsActive] = useState(false);

    const handleNotifications = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <Routes>
                <Route path="/main" element={<Container>
                    <Row>
                        <Col style={{marginLeft:-12}}>

                            {isActive ? (<Col xs={3}>
                                <Notifications
                                    li={[
                                        ["Notifications", <AiOutlineNotification onClick={handleNotifications}/>],
                                        ["Bildirim 1", <AiFillHeart/>],
                                        ["Bildirim 2", <AiFillHeart/>],
                                        ["Bildirim 3", <AiFillHeart/>],
                                        ["Bildirim 4", <AiFillHeart/>],
                                        ["Bildirim 5", <AiFillHeart/>],
                                        ["Bildirim 6", <AiFillHeart/>],
                                        ["Bildirim 7", <AiFillHeart/>],
                                        ["Bildirim 8", <AiFillHeart/>],
                                        ["Bildirim 9", <AiFillHeart/>]
                                    ]}
                                />
                            </Col>): (
                                <CustomNav
                                    li={[
                                        ["Dashboard", <Link to="/main"><AiFillDashboard/></Link>],
                                        ["Profile", <Link to="/profile"><AiOutlineUser/></Link>],
                                        ["Messages", <Link to="/messages"><BiMessageAlt/></Link>],
                                        ["Notifications",<AiOutlineNotification onClick={handleNotifications}/>],
                                        [<input type="text"/>, <BsSearch/>],
                                        [<Settings style={{marginTop:"auto"}}/>]
                                    ]}
                                />
                            )}

                        </Col>
                        <Col>
                            <CreatePost/>
                        </Col>
                    </Row>
                </Container>}/>
                <Route path="/" element={
                    <div className="loginPage">
                        <Grid container>
                            <Grid item xs={12}>
                                <Login/>
                            </Grid>
                        </Grid>
                    </div>
                        }/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/profile" element={<Container>
                    <Row>
                        <Col xs={3} style={{marginLeft:-12}}>
                            {isActive ? (<Col xs={3}>
                                <Notifications
                                    li={[
                                        ["Notifications", <AiOutlineNotification onClick={handleNotifications}/>],
                                        ["Bildirim 1", <AiFillHeart/>],
                                        ["Bildirim 2", <AiFillHeart/>],
                                        ["Bildirim 3", <AiFillHeart/>],
                                        ["Bildirim 4", <AiFillHeart/>],
                                        ["Bildirim 5", <AiFillHeart/>],
                                        ["Bildirim 6", <AiFillHeart/>],
                                        ["Bildirim 7", <AiFillHeart/>],
                                        ["Bildirim 8", <AiFillHeart/>],
                                        ["Bildirim 9", <AiFillHeart/>]
                                    ]}
                                />
                            </Col>): (
                                <CustomNav
                                    li={[
                                        ["Dashboard", <Link to="/main"><AiFillDashboard/></Link>],
                                        ["Profile", <Link to="/profile"><AiOutlineUser/></Link>],
                                        ["Messages", <Link to="/messages"><BiMessageAlt/></Link>],
                                        ["Notifications",<AiOutlineNotification onClick={handleNotifications}/>],
                                        [<input type="text"/>, <BsSearch/>],
                                        [<Settings style={{marginTop:"auto"}}/>]

                                    ]}
                                />
                            )}
                        </Col>
                        <Col xs={9}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                                <Profile />
                            </div>
                        </Col>
                    </Row>
                </Container>}/>
                <Route path="messages" element={<Grid container spacing={14}>
                        <Grid item xs={3}>
                            {isActive ? (<Grid item xs={3}>
                                <Notifications
                                    li={[
                                        ["Notifications", <AiOutlineNotification onClick={handleNotifications}/>],
                                        ["Bildirim 1", <AiFillHeart/>],
                                        ["Bildirim 2", <AiFillHeart/>],
                                        ["Bildirim 3", <AiFillHeart/>],
                                        ["Bildirim 4", <AiFillHeart/>],
                                        ["Bildirim 5", <AiFillHeart/>],
                                        ["Bildirim 6", <AiFillHeart/>],
                                        ["Bildirim 7", <AiFillHeart/>],
                                        ["Bildirim 8", <AiFillHeart/>],
                                        ["Bildirim 9", <AiFillHeart/>]
                                    ]}
                                />
                            </Grid>): (
                                <CustomNav
                                    li={[
                                        ["Dashboard", <Link to="/main"><AiFillDashboard/></Link>],
                                        ["Profile", <Link to="/profile"><AiOutlineUser/></Link>],
                                        ["Messages", <Link to="/messages"><BiMessageAlt/></Link>],
                                        ["Notifications",<AiOutlineNotification onClick={handleNotifications}/>],
                                        [<input type="text"/>, <BsSearch/>],
                                        [<Settings style={{marginTop:"auto"}}/>]
                                    ]}
                                />
                            )}
                        </Grid>
                        <Grid item xs={9}>
                            <Message/>
                        </Grid>
                    </Grid>
                }/>
                <Route path="/chat" element={<Chat/>}/>
            </Routes>
        </>
    )
}

export default App
