import {useState} from 'react';
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from 'mdb-react-ui-kit';
import './login.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as postActions from "../redux/actions/postActions.js";
import {Grid} from "@mui/material";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
const BASE_API_URL = "http://localhost:8080/api/auth/login"

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        setLoading(true);
        axios.post(BASE_API_URL, {email, password})
            .then((response) => {
                setLoading(false);
                setData(response.data);
                navigate("/main");
                props.actions.setJwt(response.data)
                console.log("Success")
            }).catch((err) => {
            setLoading(false);
            setError(err);
            console.log("Fail")
        })
    }

    return (
        <Grid container spacing={0}
              alignItems="center"
              justifyContent="center"
              sx={{minHeight: '100vh', maxWidth: '100%'}} className="loginSide">
            <Grid item xs={12}>
                <MDBContainer className="my-5 gradient-form">

                    <MDBRow>

                        <MDBCol col='6' className="mb-5">
                            <div className="d-flex flex-column ms-5">

                                <div className="text-center">
                                    <img
                                        src="https://www.offidocs.com/images/logobirdblue.jpg"
                                        style={{width: '185px', height: "250px"}} alt="logo"/>
                                    <h4 className="mt-1 mb-5 pb-1 text-white">Catchy</h4>
                                </div>

                                <p className="text-white">Please login to your account</p>


                                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4'
                                          label='Email address' id='form1' type='email' className="text-white"/>

                                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)}
                                          wrapperClass='mb-4'
                                          label='Password' id='form2' type='password' className="text-white"/>


                                <div className="text-center pt-1 mb-5 pb-1">
                                    <MDBBtn className="mb-4 w-100 gradient-custom-2"
                                            onClick={handleLogin}>Login</MDBBtn>
                                    <a className="text-blue text-decoration-underline" href="#!">Forgot password?</a>
                                </div>

                                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                    <p className="mb-0 text-white">Don't have an account?</p>
                                    <MDBBtn outline className='mx-2' color='danger'>
                                        <Link to="/signup" >Create Account</Link>
                                    </MDBBtn>
                                </div>

                            </div>

                        </MDBCol>

                        <MDBCol col='6' className="mb-5">
                            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4 rounded" style={{opacity:0.5}}>

                                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                    <h4 className="mb-4">Catchy!</h4>
                                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed
                                        do
                                        eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis
                                        nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <h1>{props.login}</h1>
                                </div>

                            </div>

                        </MDBCol>
                        {loading && (<h1>Loading...</h1>)}
                    </MDBRow>

                </MDBContainer>
            </Grid>
        </Grid>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            setJwt: bindActionCreators(postActions.login, dispatch)
        }
    };
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);