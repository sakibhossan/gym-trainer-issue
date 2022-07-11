import React from 'react';
import google from '../../../../Images/Trainer/google.png';
import github from '../../../../Images/Trainer/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, extraLoading, error1] = useSignInWithGithub(auth);
const navigate =useNavigate();

let errorElement;
    if (error || error1) {
        errorElement =  <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
           
              
            
        
    }

    if(user || user1){
        navigate('/home');
    }
    if(loading || extraLoading){
        return <Loading></Loading>

    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
            </div>
            {errorElement}

            <div>
                <button 
                onClick={() => signInWithGoogle()}
                className=' rounded-pill d-block mx-auto'>
                    <img src={google} alt="" />
                    <span className='px-3'> Google Sign In</span>
                </button>
                <button 
                onClick={() =>signInWithGithub() }
                className=' rounded-pill d-block mx-auto my-3'>
                    <img src={github} alt="" />
                    <span className='px-4'> Github Sign In</span>
                </button>
            </div>





        </div>
    );
};

export default SocialLogin;