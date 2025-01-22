import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";


const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Maheen Kamal Khan</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#hero'> Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#projects'>Project</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>

            </ul>
            <TfiMenuAlt className='md:hidden' size={35}/>

        </div>

    </div>

  )
}

export default Navbar
