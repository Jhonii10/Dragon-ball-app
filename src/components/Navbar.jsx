/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { authTypes } from '../types/AuthTypes';

const Navbar = () => {

  const { dispatch } = useContext(AuthContext); 

   const navigate = useNavigate()
    
    const handleLogout = () => {
        dispatch({ type: authTypes.logout });
        navigate('/login')
    }

    
    function fixnav(){
      const nav = document.querySelector('.navbar')
      return window.scrollY > nav.offsetHeight ? nav.classList.add('active') : nav.classList.remove('active');
    }

    window.addEventListener('scroll',fixnav)

    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-info-10">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/login'>
      Dragon Ball
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink   className="nav-link " aria-current="page" to='/mans'>
            Mans
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink   className="nav-link"  to='/womans'>
            womans
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink   className="nav-link" to='/search'>
            Search
          </NavLink>
        </li>

        
      </ul>
      <div className='d-flex'>
        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            
      </div>
        
    </div>
  </div>
</nav>
        
            
        </div>
    );
}

export default Navbar;
