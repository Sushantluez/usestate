import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-black text-white flex justify-between px-7 py-3'>

      <h1> Sample Web</h1>
      <nav className='space-x-7'>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
    </header>
  )

}

export default Header