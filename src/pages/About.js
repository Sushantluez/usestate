import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
      <NavLink to='aboutDetails'>Go to Nest About Details</NavLink>
      <h1>This is about Pages</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, obcaecati.
      </p>
      <Outlet />
    </>
  )
}

export default About