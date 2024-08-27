import isCheckedMode from '@/components/functions/ischeckedMode'
import { contact, service } from '@/contants/contants'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import styles from '@/style'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const Footer = () => {  
  const dateCurrent = new Date().getFullYear();
  const isDark = isCheckedMode();

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} md:${styles.padding} 
            sm:flex-col flex-col ${isDark ? "blur-background box-shadow" : "bg-white border-rose-700 border-[1px] shadow-[0_2px_40px_-6px_rgb(219,90,90)] "} rounded-[20px] p-0`}
    >
      <div className={`${styles.flexStart} flex flex-col w-full md:flex-row `}>
        <div className='flex-[1.5px] w-full flex flex-row justify-start sm:mt-0 mt-0 md:px-20 px-0 pl-[40px] sm:pl-[0px]'>
          {service.map((ser, index) => (
            <div key={index}
                 className="flex flex-col sm:my-0 my-4 min-w-[80px] l md:px-20 px-0 mx-2 "
            >
              <motion.h4 
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8  }}
                whileInView={{ opacity: 1, y: 0 }}
                className={ `font-poppins font-medium sm:text-[18px] text-[16px]  leading-[27px] ${isDark ? "text-white" : "text-black"} `}>
                {ser.title}
              </motion.h4>
              <motion.ul 
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='list-none mt-4 grid'>
                {ser.components.map((copt, index) => (
                  <Link key={index}
                        to={`/${ser.title}/${copt.name}`}
                        className={`font-poppins font-normal sm:text-[16px] text-[14px] 
                                  leading-[24px] ${isDark ? "text-white" : "text-gray-900"} 
                                  
                                  ${index !== copt.url.length - 1} ? "mb-4" : "mb-0"`}  
                  >
                    <span className={`  cursor-pointer  duration-100 ease-in-out transform hover:scale-110
                     ${isDark ? "hover:border-l-light-2 hover:border-b-2 hover:shadow-emerald-300" : "hover:border-pink-600 hover:border-b-2 hover:shadow-pink-600 hover:text-pink-600"} `}>
                      {copt.name}
                    </span>
                  </Link>
                ))}
              </motion.ul>
            </div>
          ))}
            <div className="flex flex-col sm:my-0 my-4 min-w-[150px] md:px-20 px-0 hidden sm:block">
              <motion.h4 
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8  }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`font-poppins font-medium sm:text-[18px] text-[16px] leading-[27px] ${isDark ? "text-white" : "text-black"}`}>
                {contact.title}
              </motion.h4>
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='grid list-none mt-4'>
                <p className={`text-left sm:py-1 py-0 sm:text-[16px] text-[14px] leading-[24px] ${isDark ? "text-gray-400" : "text-zinc-700"} inline-block `}>Address: 
                  <span className='ml-2'>
                    {contact.address}
                  </span>
                </p>
                <p className={  `text-left sm:py-1 py-0 sm:text-[16px] text-[14px] leading-[24px] ${isDark ? "text-gray-400" : "text-zinc-700"} inline-block `}>
                  Email:
                  <span className='ml-2'>
                    {contact.email}
                  </span>
                </p>
                <p className={`text-left sm:py-1 py-0 sm:text-[16px] text-[14px] leading-[24px] ${isDark ? "text-gray-400" : "text-zinc-700"} inline-block `}>My phone: 
                  <span className='ml-2'>
                    {contact.phoneNo}
                  </span>
                </p>
              </motion.div>
            </div>
        </div>
      </div>
      <div className="sm:hidden flex flex-col sm:my-0 my-4 min-w-[150px] md:px-20 px-0 ">
        <motion.h4 
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8  }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`font-poppins font-medium sm:text-[18px] text-[16px] leading-[27px] ${isDark ? "text-white" : "text-black"}`}>
          {contact.title}
        </motion.h4>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='grid list-none mt-4'>
          <p className={`text-left sm:py-1 py-0 sm:text-[16px] text-[14px] leading-[24px] ${isDark ? "text-gray-400" : "text-zinc-700"} inline-block `}>Address: 
            <span className='ml-2'>
              {contact.address}
            </span>
          </p>
          <p className={  `text-left sm:py-1 py-0 sm:text-[16px] text-[14px] leading-[24px] ${isDark ? "text-gray-400" : "text-zinc-700"} inline-block `}>
            Email:
            <span className='ml-2'>
              {contact.email}
            </span>
          </p>
          <p className={`text-left sm:py-1 py-0 sm:text-[16px] text-[14px] leading-[24px] ${isDark ? "text-gray-400" : "text-zinc-700"} inline-block `}>My phone: 
            <span className='ml-2'>
              {contact.phoneNo}
            </span>
          </p>
      </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1, delay: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        className=' flex w-full justify-center items-center pt-12'>
        <p className={` font-poppins font-normal sm:text-[16px] text-[14px] leading-[27px] ${isDark ? "text-white" : "text-slate-900"}`}>
        Copyright {dateCurrent} Portfolio. © All rights reserved.   
        </p>
      </motion.div>

      <div className='flex list-none sm:hidden flex justify-end items-center py-8'>
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
    </section>
  )
}

export default Footer