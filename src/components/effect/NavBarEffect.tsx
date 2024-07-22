import React from 'react'
import { Link } from 'react-router-dom'


const NavBarEffect = ({navLinks}) => {

    
  return (
    <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px]${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
        text-white px-5`}>
            <Link to={`/${nav.id}`} className='relative group pb-2'>
                {nav.title}
                <span className='h-[1px] inline-block w-0 bg-neutral-50 absolute left-1/2 -translate-x-1/2 bottom-0 
                group-hover:left-1/2 group-hover:translate-x-0 group-hover:w-1/2 transition-all ease duration-300'>
                    &nbsp;
                </span>
                <span className='h-[1px] inline-block w-0 bg-neutral-50 absolute right-1/2 translate-x-1/2 bottom-0 
                group-hover:right-1/2 group-hover:translate-x-0 group-hover:w-1/2 transition-all ease duration-300'>
                    &nbsp;
                </span>

            </Link>
        </li>
        ))}
    </ul>
  )
}

export default NavBarEffect