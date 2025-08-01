import { Link, Navigate, Outlet } from 'react-router-dom'
import { userStateContext } from '../contexts/contextProvider';

const DefaultLayout = () => {

  const { user, token } = userStateContext();

  if (!token) {
    return <Navigate to="/login" />
  }


  const OnlogOut = () => {
        console.log("How are you doing?");
  }

      return (
      <div id="defaultLayout">
        <aside>
          <Link to="/dashboard">Users</Link>
          <Link to="/users">Create User</Link>
        </aside>

        <div className='content'>
          <header>
            <div>

              Header

            </div>

            <div>

              {user?.name}

              <a href="#" onClick={OnlogOut} className='btn-logout'>LogOut</a>

            </div>
          </header>

          <main>
            <Outlet />
          </main>

        </div>

      </div>
      )
}

      export default DefaultLayout
