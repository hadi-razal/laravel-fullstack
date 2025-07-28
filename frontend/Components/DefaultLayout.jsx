import { Navigate, Outlet } from 'react-router-dom'
import {  userStateContext } from '../contexts/contextProvider';

const DefaultLayout = () => {

  const { user ,token} = userStateContext();

  if(!token) {
    return <Navigate to="/login"  />
  }

  return (
    <div>
      <h1>Default Layout</h1>
      <p>This layout is for authenticated users.</p>
      <Outlet/>
    </div>
  )
}

export default DefaultLayout
