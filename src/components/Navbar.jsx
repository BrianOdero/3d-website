import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to={"/"} className="w-10 h-10 rounded-lg flex items-center justify-center bg-white font-bold shadow-md" >
            <p className='blue-gradient_text'>All</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to={"/about"} className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>About</NavLink>
            <NavLink to={"/about"} className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>Projects</NavLink>
        </nav>
    </header>
  )
}

export default Navbar;