import React,{useState} from 'react';
import { Container,Row,Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
 import {ShowErrorMsg} from '../../Helper/Message';
 import {ShowSuccessMsg} from '../../Helper/Message';
 import {ShowLoading} from '../../Helper/loading';
 import {signup} from '../../api/auth';
import './Signup.css';
const Signup = (props) => {
    const[formData,setFormData] = useState({
        username :'kk',
        email :'djkaishav@gmail.com',
        password:'12345',
        cpassword:'12345',
        SuccessMsg :false,
        errorMsg:false,
        loading:false

    });


    const{username,email,password,cpassword,SuccessMsg,errorMsg,loading} = formData;


    /* EVENT HANDLERS */
    
    const handleChange = (evt) =>{
        // console.log(evt);
        setFormData({
            ...formData,
            [evt.target.name] :evt.target.value,
            SuccessMsg:'',
            errorMsg:''
        });
    }

    const handleSubmit = evt =>{
        evt.preventDefault();

        // client side form validations 
        if(isEmpty(username) || isEmpty(email)  || isEmpty(password)  || isEmpty(cpassword) ){
            setFormData({
                ...formData , errorMsg : "All input fields are required"
            })
        }
        else if(!isEmail(email)){
              setFormData({
                  ...formData , errorMsg : "Invlaid Email"
              })
        }

        else if (!equals(password,cpassword)){
            setFormData({
                ...formData , errorMsg :" Password does not match"
            })
        }
        else{
            //success
            // setFormData({
            //     ...formData , SuccessMsg : "Form submitted successfully!!!"

            // })
            const{username,email,password} = formData ;
            const data = {username,email,password}

             setFormData({...formData , loading:true})

             signup(data)
                .then(response =>{
                     console.log("Axios signup success ",response);
                     setFormData({
                         username:'',
                         email:'',
                         password:'',
                         cpassword:'',
                         loading:false,
                         SuccessMsg:response.data.successMessage
                     })
                })
                .catch(err =>{
                   console.log('Axios signup error' , err);
                   setFormData({
                       ...formData ,
                       loading:false
                   })
                })

        }

    }
    /* EVENT HANDLERS */
    return (
        <>
            <div className="signup_sec">
                <Container>
                    <Row className=" px-3 vh-100">
                        <Col md={6} className="mx-auto align-self-center">
                        {errorMsg && ShowErrorMsg(errorMsg)}
                        {loading && <div className="text-center pb-4">{ShowLoading()}</div>}
                            <form className="signup-form" onSubmit={handleSubmit} noValidate>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" name="username" value={username} onChange={handleChange} placeholder="Username" />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                    <input type="email" className="form-control" name="email" value={email} 
                                    onChange={handleChange} placeholder="Your Email" />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className=" fa fa-lock"></i>
                                        </span>
                                    </div>
                                    <input type="password" className="form-control" name="password" value={password} onChange={handleChange} placeholder="Your Password" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className=" fa fa-lock"></i>
                                        </span>
                                    </div>
                                    <input type="password" className="form-control" name="cpassword"
                                    onChange={handleChange} value={cpassword} placeholder="Confirm Password" />
                                </div>
                                <button type="submit" className=" btn btn-block btn-primary">Create an Account</button>
                            </form>
                            {SuccessMsg && ShowSuccessMsg(SuccessMsg)}
                           {/* <p style={{color:'white'}}>{JSON.stringify(formData)}</p> */}
                            <div className="text-center mt-3 mb-3">
                                <p className="text-white">Have an account?<Link to="/login">Login</Link></p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>

        </>
    );
}

export default Signup;