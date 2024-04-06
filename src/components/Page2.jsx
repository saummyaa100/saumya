import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
// import {ReactComponent as Logo} from './public/vite.svg'
import Login from "./Login";


export default function Page2() {
  const {user,isLoading} = useAuth0();

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <>

    <Login/>
    <div className='box flex-container'>
      <div className="text">
        <h1>Hello {user.name}</h1>
      </div>
      <div className="btn2">
      {/* <Logo/> */}
      <button type="button" className="x"><NavLink to='/page3'>Create Query page</NavLink></button> 
      <button type="button" className="y">Select Query page</button> 
      </div>
       
    </div>      
    </>
  )
}
