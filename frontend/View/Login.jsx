import { useRef } from 'react'
import { Link } from 'react-router-dom';
import AxiosClient from '../axiosClient';

const Login = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const onSubmit = async (e)  => {

    e.preventDefault();
    console.log("Form submitted");

    await AxiosClient.get('/sanctum/csrf-cookie');

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(payload);

    AxiosClient.post('/login', payload)
      .then(({ data }) => {
        console.log("Logged In successfully", data); // fixed here

        if (data.user) {
          setUser(data.user);
          setToken(data.token);
          localStorage.setItem('token', data.token);
        }

      })
      .catch(error => {
        console.error("Registration failed", error);
        alert("Registration failed. Please try again.");
      });
  }


  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>

        <form action="" onSubmit={onSubmit}>
          <h1>Login into your account</h1>
          <input ref={emailRef} type="email" placeholder='Email' />
          <input ref={passwordRef} type="password" placeholder='Password' />
          <button className='btn btn-block'>Login</button>
        </form>

        <p className='message'>
          Not Registered? <Link to="/register">Create an account</Link>
        </p>

      </div>
    </div>
  )
}

export default Login
