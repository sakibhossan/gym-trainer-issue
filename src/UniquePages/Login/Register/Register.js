import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import  auth from '../../../firebase.init';
import SocialLogin from '../Social/SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [terms, setTerms] = useState(false);
    const [
        createUserWithEmailAndPassword,
        
        loading,
        
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();

const navigateLogin= () =>{
    navigate('/login');

}
if(loading || updating){
    return <Loading></Loading>

}


const handleRegister = async (event)  =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    
   
     await  createUserWithEmailAndPassword(email, password);
     await updateProfile({ displayName: name });
     console.log('Updated profile');
     navigate('/home');

    

   
}


    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Addrees' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setTerms(!terms)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${terms ? '': 'text-danger'}`} htmlFor="terms">Accept Terms and Condition</label>

                <input 
                disabled={!terms}
                className='w-50 mx-auto btn btn-dark mt-3' 
                type="submit" 
                value="Register" />
            </form>
            <p>Already Have an Account <Link to = '/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login!</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;