import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { userStateContext } from '../contexts/contextProvider';

const GuestLayout = () => {


  const { token } = userStateContext();

  if (token) {
    return <Navigate to="/users" replace />
  }


  return (
    <div>
      <h1>For guest users only</h1>
      <Outlet />
    </div>
  )
}

export default GuestLayout
