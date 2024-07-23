import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { TfiAngleDoubleLeft,  TfiAngleDoubleDown } from "react-icons/tfi";
// import {navLinks} from '../../public/constants';
import { useState } from 'react';
import "@/custom.css"
import NavBarEffect from '@/components/effect/NavBarEffect';
import { navLinks } from "@/contants/contants"
// import logo from "../public/assets/logo.png"



const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  console.log(toggle);

  return (
    <nav className="mb-0 flex items-center justify-center py-4 navbar">
        {/* <div className='flex flex-shrink-0 items-center'>
        </div> */}
        {/* <div className='m-8 flex  items-center justify-center gap-4 text-2xl'> */}
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} 
            className="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full cursor-pointer transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg" 
            alt="logo" 
          />
          {/* <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px]${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
               text-white px-5`}>
                <Link to={`/${nav.id}`} >
                  {nav.title}
                </Link>
              </li>
            ))}

          </ul> */}

          <NavBarEffect navLinks={navLinks}/>
          
          <div className='sm:hidden flex flex-1 justify-end items-center mb-10'>
            {/* <img src={toggle ? <TfiAngleDoubleLeft /> :  <TfiAngleDoubleDown /> } 
            alt="menu" 
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
            /> */}

            <button onClick={() => setToggle(!toggle)} className='cursor-pointer z-10'>
              
              {toggle ? 
                <TfiAngleDoubleDown color= "white" className='w-[20px] h-[20px] '/> 
              : 
                <TfiAngleDoubleLeft color= "white" className='w-[20px] h-[20px]' /> 
              }
            </button>
            <div className={`
              ${toggle ? 'flex' : 'hidden'}
              p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} 
              >
              <ul className='flex list-none flex-col justify-center items-center flex-1'>
                {navLinks.map((nav, index) => (
                  <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px]${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                  text-white px-5`}>
                    <a href={`#${nav.id}`} >
                      {nav.title}
                    </a>
                  </li>
                ))}

              </ul>
            </div>
          </div>
          <div className='flex list-none sm:flex hidden justify-end items-center'>
            <FaLinkedin className='w-[25px] h-[25px] mx-2 cursor-pointer transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:text-blue-700 '/>
            <FaGithub className='w-[25px] h-[25px] mx-2 cursor-pointer transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:text-slate-100 ' />
            <FaInstagram className='w-[25px] h-[25px] mx-2 cursor-pointer transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:text-purple-900 '/>
            <FaSquareXTwitter className='w-[25px] h-[25px] mx-2 cursor-pointer transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:text-slate-50 '/>
          </div>
        {/* </div> */}
    </nav>
  )
}

export default NavBar