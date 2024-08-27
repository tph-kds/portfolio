import React from 'react'
import { Link } from 'react-router-dom';
import isCheckedMode from './ischeckedMode';
import "@/custom.css"
import { motion } from 'framer-motion'


type Props = {
    title:string;
    src: string;
    description: string;
    link: string
    index:number
}

const ProjectCard = ({src, title, description, link, index} : Props) => {
  const isDark = isCheckedMode();
  return (
    <motion.div 
        initial={{ opacity: 0, x: 100 }}
        // animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 + index }}
        whileInView={{ opacity: 1, x: 0 }}
        // className={`lg:w-1/4 max-h-[600px] relative hover:transform hover:transition-transform hover:duration-500 hover:scale-105 hover:zoom-out hover:shadow-2xl  overflow-hidden rounded-lg shadow-lg border ${isDark ? "border-slate-500" : "border-pink-700 shadow-stone-600"} `}>
        className={`lg:w-1/4  max-h-[600px] relative  ${isDark ? "border-slate-500" : "border-pink-700 shadow-stone-600"} `}>
        <div className='max-h-[600px] relative  transform transition-transform duration-500 hover:scale-105 hover:zoom-out hover:shadow-2xl  overflow-hidden rounded-lg shadow-lg border ${isDark ? "border-slate-500" : "border-pink-700 shadow-stone-600"}'>

        <img src={src} 
             alt={title}
             width={1000}
             height={1000}
             className='w-full object-contain' 
        />
        <div className='relative p-4 pb-50 flex flex-col justify-between sm:h-[60%] h-[80%] cursor-pointer  '>
          <div>
            <h1 className={` line-clamp-[3] h-[96px] ${isDark ? "text-white" : "light-title-project"} text-xl lg:text-2xl font-semibold `}>
                {title}
            </h1>
            <p className={` line-clamp-[9] h-[180px] ${isDark ? "text-gray-300" : "text-neutral-900"} mt-2  text-sm lg:text--xl pb-10`}> {description} </p>

          </div>
            {/* <div className=' p-4 justify-center items-center flex '> */}
            {/* </div> */}
          <Link to={link} className={ `relative text-center mt-2 mb-12 ${isDark ? "text-gradient" : "light-link-project"} rounded-md font-medium text-sm[25px] lg:text--xl flex justify-center items-center`}>
          {/* <Link to="/" className='self-center mt-auto'> */}
            <span className={`text-center ${isDark ? "" : "light-link-project"} hover:shadow-2xl hover:shadow-slate-600 font-bold transition duration-500 ease-in-out hover:from-green-200 hover:to-cyan-300`}>See more...</span>
          </Link>
        </div>
        </div>
    </motion.div>
  )
}

export default ProjectCard