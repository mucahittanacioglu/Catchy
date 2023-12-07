import {useState} from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import './sign-up.css';
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
let REGISTER_URL = "http://localhost:8080/api/auth/register";
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();
    const register = () => {
        axios.post(REGISTER_URL, {firstName, lastName, email, password}).then(res => {
            console.log("Successfull register.", res);
            navigate("/main");
        })
            .catch(err => {
                console.log("Register error.",err);
            })
    }
    const handleRegister = () => {
        register();

    }
    return (
        <div className="signUpSide">
            <MDBContainer fluid className='p-4'>

                <MDBRow>

                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                        <h1 className="my-5 display-3 fw-bold ls-tight px-3 text-center text-white">
                            Catchy <br/>
                            <span className="text-primary">Sign up now!</span>
                        </h1>

                        <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                            quibusdam tempora at cupiditate quis eum maiores libero
                            veritatis? Dicta facilis sint aliquid ipsum atque?
                        </p>

                    </MDBCol>

                    <MDBCol md='6'>

                        <MDBCard className='my-5'>
                            <MDBCardBody className='p-5 rounded' style={{backgroundColor: "#000027"}}>

                                <MDBRow>
                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='First name' value={firstName}
                                                  onChange={e => setFirstName(e.target.value)} id='form1' type='text'/>
                                    </MDBCol>

                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='Last name' value={lastName}
                                                  onChange={e => setLastName(e.target.value)} id='form1' type='text'/>
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput wrapperClass='mb-4' label='Email' value={email}
                                          onChange={e => setEmail(e.target.value)} id='form1' type='email'/>
                                <MDBInput wrapperClass='mb-4' label='Password' value={password}
                                          onChange={e => setPassword(e.target.value)} id='form1' type='password'/>

                                <div className='d-flex justify-content-center mb-4'>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'
                                                 label='Do you want to get notification via email?'/>
                                </div>

                                <MDBBtn className='w-100 mb-4' size='md' onClick={handleRegister}>sign up</MDBBtn>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    );
};

export default SignUp;