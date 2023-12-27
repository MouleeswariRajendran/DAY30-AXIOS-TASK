import React from 'react'
import CreateUser from './CreateUser'
import { Link } from 'react-router-dom'
import UserList from './UserList'

function Navbar() {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg  bg-primary  " data-bs-theme="dark">
    <div class="container-fluid">
    <Link className="navbar-brand" to="/">
            CRUD
          </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
          <Link class="nav-link" to={"/user-list"}> User List</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={"/create-user"}>Create User</Link>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>

 <UserList/>

  </>
  )
}

export default Navbar