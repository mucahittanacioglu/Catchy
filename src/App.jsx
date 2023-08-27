import './App.css'
import CustomNav from './component/CustomNav'
import {AiFillDashboard, AiOutlineNotification, AiOutlineUser} from "react-icons/ai"
import {BsSearch} from "react-icons/bs";
import {BiMessageAlt} from "react-icons/bi";
import Post from "./component/post/Post.jsx";
import 'react-bootstrap/dist/react-bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Container, Row} from "react-bootstrap";

function App() {
    return (
        <>

            <Container>
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
                        <Post/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default App
