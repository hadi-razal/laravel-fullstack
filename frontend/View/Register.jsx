import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);




  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value
    };

  }


  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form action="" onSubmit={onSubmit}>
          <h1> Create your account</h1>
          <input ref={nameRef} type="text" placeholder='Full Name' />
          <input ref={emailRef} type="email" placeholder='Email' />
          <input ref={passwordRef} type="password" placeholder='Password' />
          <input ref={confirmPasswordRef} type="password" placeholder='Re-enter the Password' />
          <button className='btn btn-block'>Register</button>
        </form>

        <p className='message'>
          Already have an account? <Link to="/login">login</Link>
        </p>

      </div>
    </div>
  )
}

export default Register
