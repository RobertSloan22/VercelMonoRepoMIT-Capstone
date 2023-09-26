import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useGetUserProfileQuery } from '../app/services/auth/authService'
import { logout, setCredentials } from '../features/auth/authSlice'
import '../styles/header.css'

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // automatically authenticate user if token is found
  const { data, isFetching } = useGetUserProfileQuery('userDetails', {
    pollingInterval: 900000, // 15mins
  })

  useEffect(() => {
    if (data) dispatch(setCredentials(data))
  }, [data, dispatch])

  return (
    <header>
      <div className='header-status'>
        <span>
          {isFetching
            ? `Fetching your profile...`
            : userInfo !== null
            ? `Logged in as ${userInfo.email}`
            : "You're not logged in"}
        </span>
        <div className='cta'>
          {userInfo ? (
            <button className='button' onClick={() => dispatch(logout())}>
              Logout
            </button>
          ) : (
            <NavLink className='button' to='/login'>
              Login
            </NavLink>
          )}
        </div>
      </div>
      <nav className='container navigation'>
        <NavLink to='/login'>LOGIN</NavLink>
        <NavLink to='/register'>REGISTER</NavLink>
        <NavLink to='/user-profile'>PROFILE</NavLink>
        <NavLink to='/user-profile'>ADMIN</NavLink>
        <NavLink to='/banking'>BANKING</NavLink>
        <NavLink to='/homescreen'>CREDIT</NavLink>
        <NavLink to='/homescreen'>BUSINESS</NavLink>
              <ul className="nav nav-pills">


      <span className="visually-hidden">Loading...</span> 
        <li className="nav-item">
                  <NavLink to='/'>HOME</NavLink>
        </li>
      </ul>
      </nav>
    </header>
  )
}

export default Header
