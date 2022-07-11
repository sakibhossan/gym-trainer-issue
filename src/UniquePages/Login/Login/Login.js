import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../Social/SocialLogin/SocialLogin';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const location = useLocation();
  const navigate = useNavigate();

  let errorElement;
  let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement =  <p className='text-danger'>Error: {error?.message}</p>
       
           
        
    
}
  const navigateRegister = event => {
    navigate('/register')
  }
  const resetPassword = async() =>{
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
          alert('Sent email');

  }

  return (
    <div className='container w-50 mx-auto '>
      <h2 className='text-primary'>Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
         Login
        </Button>
      </Form>
      {errorElement}
      <p>New to Workout? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
      <p>Forget Password? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
      <SocialLogin></SocialLogin>


    </div>
  );
};

export default Login;