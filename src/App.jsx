import './App.css'
import CustomNav from './component/CustomNav'
import {AiFillDashboard, AiOutlineNotification, AiOutlineUser} from "react-icons/ai"
import {BsSearch} from "react-icons/bs";
import {BiMessageAlt} from "react-icons/bi";
import 'react-bootstrap/dist/react-bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Container, Row} from "react-bootstrap";
import PostBody from "./component/post/createPost/CreatePost.jsx";
import Login from "./component/login/login.jsx";

//TODO:Need Log-in and Sing-up page.
function App() {
    return (
        <>
            {/*<Container>
                <Row>
                    <Col>
                        <CustomNav
                            li={[
                                ["Dashboard", <AiFillDashboard/>],
                                ["Profile", <AiOutlineUser/>],
                                ["Messages", <BiMessageAlt/>],
                                ["Notifications", <AiOutlineNotification/>],
                                ["Search", <BsSearch/>]
                            ]}
                        />
                    </Col>
                    <Col>
                        <PostBody/>
                    </Col>
                </Row>
            </Container>*/}
            <Login/>
        </>
    )
}

export default App
