import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
const dispatch =useDispatch()
const logoutHandler =()=>{
    authService.logout().then(()=>{
        dispatch(logout())
        // Todo task to create a catch as well
    })
}
  return (
    <button type="button" onClick={logoutHandler} className="relative bg-pink-500  text-white font-semibold px-4 py-2 rounded-lg shadow-md transition transform hover:scale-100 
    before:content-[''] before:absolute before:inset-0 before:rounded-lg before:bg-pink-500  before:opacity-50 before:blur-lg before:-z-10 hover:before:opacity-100"
    >
      Logout
    </button>

  )
}

export default LogoutBtn
