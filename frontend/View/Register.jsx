import  { useRef } from 'react'
import { Link } from 'react-router-dom';
import AxiosClient from '../axiosClient';
import { userStateContext } from '../contexts/contextProvider';

const Register = () => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const {setUser,setToken} = userStateContext()


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirm_Password: confirmPasswordRef.current.value
    };

    console.log(payload)

    AxiosClient.post('/register', payload)


      .then(({ data }) => {
        console.log("Registration successful", response.data);

        if(data.user) {
          setUser(data.user);
          setToken(data.token);
          localStorage.setItem('token', data.token);
        }

      }).catch(error => {
        console.error("Registration failed", error);
        alert("Registration failed. Please try again.");
      })

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
