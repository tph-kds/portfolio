import React from 'react'
import { Link as LinkRouter} from 'react-router-dom'
import { Link as LinkScroll, Element } from 'react-scroll'
import useScrollToHash  from '@/components/functions/UseScrollToHash'
import isCheckedMode from '../functions/ischeckedMode'



const NavBarEffect = ({navLinks, isDark}: { navLinks: any[], isDark: boolean }) => {
    useScrollToHash();
    
    console.log(isDark);
    
  return (
    <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (
        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px]${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
        ${isDark ? "text-white" : "text-black"} hover:font-semibold px-5`}>
            <LinkRouter to={`#${nav.id}`} className='relative group pb-2' >
                {/* <LinkScroll activeClass="active" to={`/${nav.id}`} spy={true} smooth={true} duration={500}> */}
                
                    {nav.title}
                    <span className={`h-[1px] hover:shadow-2xl hover:shadow-zinc-600 inline-block w-0 ${isDark ? "bg-neutral-50" : "bg-pink-700"} absolute left-1/2 -translate-x-1/2 bottom-0 
                    group-hover:left-1/2 group-hover:translate-x-0 group-hover:w-1/2 transition-all ease duration-300`}>
                        &nbsp;
                    </span>
                    <span className={`h-[1px] hover:shadow-2xl hover:shadow-zinc-600 inline-block w-0 ${isDark ? "bg-neutral-50" : "bg-pink-700"} absolute right-1/2 translate-x-1/2 bottom-0 
                    group-hover:right-1/2 group-hover:translate-x-0 group-hover:w-1/2 transition-all ease duration-300`}>
                        &nbsp;
                    </span>
                {/* </LinkScroll> */}

            </LinkRouter>
        </li>
        ))}
    </ul>
  )
}

export default NavBarEffect

