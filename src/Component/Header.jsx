import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
        <a href="" className='navbar-brand'>Api</a>
        <button className='navbar-toggler' data-bs-target='#myheader' data-bs-toggle='collapse' aria-controls='false' aria-label='Toggle navigation'>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar navbar-collapse" id='myheader'>
        <ul className='navbar-nav ms-md-auto'>
            <li className='nav-item'> <Link to="/" className='nav-link' >Get</Link></li>
            <li className='nav-item'> <Link to="/Post" className='nav-link' >Post</Link></li>
        </ul>
        </div>
    </nav>
    </>
  )
}

export default Header