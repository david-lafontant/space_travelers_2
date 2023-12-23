import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='flex flex-row justify-center gap-8'>
      <Link to="/">Rockets</Link>
      <Link to="/dragons">Dragons</Link>
      <Link to="/missions">Missions</Link>
    </div>
  )
}

export default Header;