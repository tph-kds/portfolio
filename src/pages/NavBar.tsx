import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { TfiAngleDoubleLeft,  TfiAngleDoubleDown } from "react-icons/tfi";
// import {navLinks} from '../../public/constants';
import { useEffect, useState } from 'react';
import "@/custom.css"
import NavBarEffect from '@/components/effect/NavBarEffect';
import { navLinks } from "@/contants/contants"
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/mode/Darkmode';
import UseTheme from '@/context/CreateContext';
import isCheckedMode from '@/components/functions/ischeckedMode';



const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const {themeMode} = UseTheme();
  const isDark = isCheckedMode();
  // console.log(isDark);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const clickButton = () => {
    setIsVisible(!isVisible); // Set the visibility to false when the div is clicked
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Hide the ul when the user scrolls down and show it when at the top
      setIsScrolled(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(toggle);
  console.log(isScrolled);
  console.log(isVisible);

  // console.log(themeMode);

  return (
    <nav className="mb-0 flex items-center justify-center py-4 navbar  ">
        {/* <div className='flex flex-shrink-0 items-center'>
        </div> */}
        {/* <div className='m-8 flex  items-center justify-center gap-4 text-2xl'> */}
          <img src="../public/assets/logo_1.png" 
            className={`sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full cursor-pointer transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-110 hover:shadow-md hover:border-spacing-x-5 ${isDark ? "hover:border-l-light-2 hover:border-b-2 hover:shadow-emerald-300" : "hover:border-l-light-4 hover:border-b-2 hover:shadow-rose-600"}  `}
            // transition-all duration-300 hover:bg-white hover:border-transparent hover:bg-clip-padding hover:bg-origin-border hover:bg-gradient-to-r hover:from-green-300 hover:to-teal-100" 
            alt="logo" 
          />
          <h4 className={`${isDark ? "text-gradient-b-w" : "light-logo-gradient"}  font-poppins font-normal cursor-pointer text-[20px] italic`}>
            Phi Hung
          </h4>
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

          <NavBarEffect navLinks={navLinks} isDark={isDark}/>
          
          <div className={`sm:hidden flex flex-1 justify-end items-center `} >
            {/* <img src={toggle ? <TfiAngleDoubleLeft /> :  <TfiAngleDoubleDown /> } 
            alt="menu" 
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
            /> */}

            { isScrolled && (<button onClick={() => {setToggle(!toggle) ; setIsVisible(!isVisible)} } className='cursor-pointer z-10'>
              
              {toggle ? 
                <TfiAngleDoubleDown color={isDark ? "white" : "black"} className={`w-[20px] h-[20px] `}/> 
              : 
                <TfiAngleDoubleLeft  color={isDark ? "white" : "black"} className={`w-[20px] h-[20px]  `}/> 
              }

            </button>)
            }
            { !isVisible && isScrolled  && <div onClick={clickButton} 
                
                className={`
              ${toggle ? 'flex' : 'hidden'}
              p-6 absolute top-20 right-0 mx-[110px] my-2 min-w-[140px] rounded-xl sidebar backdrop-blur-3xl ${isDark ? '' : 'bg-gradient-to-r from-pink-500 to-teal-500'} `} 
              >
              <ul className='flex list-none flex-col justify-center items-center flex-1'>
                {navLinks.map((nav, index) => (
                  <li key={nav.id} className={`  font-poppins font-normal cursor-pointer mb-6 text-[16px]${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                  ${isDark ? 'text-white' : 'text-black font-semibold'} px-5`}>
                    <a href={`#${nav.id}`} className='hover:text-cyan-300' >
                      {nav.title}
                    </a>
                  </li>
                ))}

              </ul>
            </div>
            }
          </div>
          <div className='flex list-none sm:flex hidden justify-end items-center'>
            <Link to={"https://www.linkedin.com/in/phi-h%C3%B9ng-tr%E1%BA%A7n-64b52031b/"} target="_blank" rel="noreferrer">
              <FaLinkedin className={`w-[25px] h-[25px] mx-2 cursor-pointer transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:text-blue-700 
                hover:border-spacing-x-5 rounded-md ${isDark ? "hover:border-l-light-2 hover:shadow-emerald-400" : "hover:border-l-pink-600  hover:shadow-pink-800"} hover:border-b-2  `}/>
            </Link>
            <Link to={"https://github.com/tph-kds"} target="_blank" rel="noreferrer">
              <FaGithub className={`w-[25px] h-[25px] mx-2 cursor-pointer transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg  
              hover:border-spacing-x-5 rounded-full ${isDark ? "hover:border-l-light-2 hover:shadow-emerald-400 hover:text-slate-100" : "hover:border-l-pink-600  hover:shadow-pink-800 hover:text-slate-900"} hover:border-b-2  `} />
            </Link>
            <Link to={""} target="_blank" rel="noreferrer">
              <FaInstagram className={`w-[25px] h-[25px] mx-2 cursor-pointer transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg  
              hover:border-spacing-x-5  hover:border-b-2 rounded-lg ${isDark ? "hover:border-l-light-2 hover:shadow-emerald-400 hover:text-purple-900" : "hover:border-l-pink-600  hover:shadow-pink-800 hover:text-purple-900"} `}/>
            </Link>
            <Link to={"https://x.com/TranPhiHungDS"} target="_blank" rel="noreferrer">
              <FaSquareXTwitter className={`w-[25px] h-[25px] mx-2 cursor-pointer transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg 
              hover:border-spacing-x-5  hover:border-b-2 rounded-lg ${isDark ? "hover:border-l-light-2 hover:shadow-emerald-400 hover:text-slate-50" : "hover:border-l-pink-600  hover:shadow-pink-800 hover:text-gray-900"} `}/>
            </Link>
          </div>
          <ThemeToggle />
        {/* </div> */}
    </nav>
  )
}

export default NavBar
