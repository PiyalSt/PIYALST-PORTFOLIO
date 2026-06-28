import { Button } from '@mui/material'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { NavLink } from 'react-router'
import assets, { navLinks } from '../assets/assets'


const Navbar = () => {
  return (
    <nav className='w-full bg-bg'>
      <div className='max-w-7xl mx-auto py-5 flex justify-between items-center'>
        
        {/* Logo */}
        <code>
          <h4 id='logo' className='font-bold text-2xl text-white'>
            PIYAL<span className='text-accent'>ST.</span>DEV
          </h4>
        </code>

        {/* Menu */}
        <ul className='flex gap-6 list-none text-text-muted'>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `border-b-2 flex items-center px-3 py-2 transition-all duration-300 cursor-pointer font-inter font-medium text-base ${
                  isActive
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-transparent hover:border-accent hover:bg-accent/10 hover:text-accent'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </ul>

        {/* Hire Button */}
        <Button
          sx={{ color: '#88ce02', borderColor: '#88ce02' }}
          variant='outlined'
        >
          😊 Hire Me
          <FaArrowRightLong className='ml-3' />
        </Button>

      </div>
    </nav>
  )
}

export default Navbar