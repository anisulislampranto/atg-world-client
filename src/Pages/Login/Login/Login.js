import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import login from '../../../images/login.png';
import './Login.css';

const Login = () => {
    const [isSignnedIn, setIsSignnedIn] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='d-flex gap-2'>
            <div>
                <h3>Create Account</h3>
                
                <form className='my-4' onSubmit={handleSubmit(onSubmit)}>
                    
                    <input style={{width:'50%',padding:'10px'}} placeholder='First Name' {...register("firstName", { required: true })} />
                    {errors.firstName && <span>This field is required</span>}

                    <input style={{width:'50%',padding:'10px'}} placeholder='Last Name' {...register("lastName", { required: true })} /> 
                    {errors.lastName && <span>This field is required</span>}
                    
                    <input style={{width:'100%',padding:'10px'}} placeholder='Email' {...register("email", { required: true })} /> <br />
                    {errors.email && <span>This field is required</span>} 

                    <input style={{width:'50%',padding:'10px'}} placeholder='Password' {...register("password", { required: true })} /> 
                    {errors.password && <span>This field is required</span>} 

                    <input style={{width:'50%',padding:'10px'}} placeholder='Confirm Password' {...register("confirmPassword", { required: true })} /> 
                    {errors.confirmPassword && <span>This field is required</span>} 
                    
                    <input className='create-account-btn' type="submit" value='Create Account'/>
                </form>
                <button className='sign-up'> <FontAwesomeIcon icon={faFacebook} /> Sign Up With FaceBook</button> <br />
                <button className='sign-up'> <FontAwesomeIcon icon={faGoogle} /> Sign Up With Google</button>
            </div>
            <div>
                <p>Already Have an Account? <small className='text-primary' onClick={()=>setIsSignnedIn(true)}>Sign In</small></p>
                <img width={'100%'} src={login} alt="" />
                <p><small>By signing up, you agree to our terms and conditions, Privecy policy</small></p>
            </div>
        </div>
    );
};

export default Login;