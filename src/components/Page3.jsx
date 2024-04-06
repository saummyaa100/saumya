import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Login from "./Login";

export default function Page3() {
  const [name, setName] = useState('');
  const [admin, setAdmin] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleAdminChange = (event) => {
    setAdmin(event.target.value);
  }

  return (
    <>
    <Login/>
    <div className='main'>
     <div className='box'>
        <div className='first'>
          <h1>Create Your Organization's Page Here</h1>
        </div>
        <div className='second'>
        <form action='#'>

        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server"/>
</div>


          {/* <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className='bt1' placeholder='Name of your page'/><br/> */}
          {/* <input type="text" id="admin" name="admin" value={admin} onChange={handleAdminChange} className='bt2' placeholder='Name of the admin'/><br/> */}
          <input type="submit" value="Create Page" className='bt3'/>
        </form>
        </div>
     </div>
    </div>
    </>
  )
}