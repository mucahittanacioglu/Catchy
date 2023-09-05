import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
} from 'mdb-react-ui-kit';
import './login.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as postActions from "../redux/actions/postActions.js";

const Login = (props) => {
    const handleLogin = () => {
        props.actions.setJwt("başarıyla girdiniz.");
    }

    return (
        <div className="loginSide">
            <MDBContainer className="my-5 gradient-form">

                <MDBRow>

                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column ms-5">

                            <div className="text-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                     style={{width: '185px'}} alt="logo" />
                                <h4 className="mt-1 mb-5 pb-1">Catchy</h4>
                            </div>

                            <p>Please login to your account</p>


                            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


                            <div className="text-center pt-1 mb-5 pb-1">
                                <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleLogin}>Login</MDBBtn>
                                <a className="text-muted" href="#!">Forgot password?</a>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                <p className="mb-0">Don't have an account?</p>
                                <MDBBtn outline className='mx-2' color='danger'>
                                    <Link to="/signup">Create Account</Link>
                                </MDBBtn>
                            </div>

                        </div>

                    </MDBCol>

                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 class="mb-4">Catchy!</h4>
                                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <h1>{props.login}</h1>
                            </div>

                        </div>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
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