import styles from '@/style'
import "@/custom.css"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaBattleNet } from "react-icons/fa";
import isCheckedMode from '@/components/functions/ischeckedMode';
import { motion } from 'framer-motion';
import motionH1  from '../components/functions/motion'

const pagesmain = () => {
  const isDark = isCheckedMode();

  // console.log(isDark);
  
  return ( 
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
       <div className={`flex-1 sm:${styles.flexStart} ${styles.flexCenter}  flex-col xl:px-0 sm:px-16 px-6`}>
        <motion.div 
          variants={motionH1(0)} 
          initial="hidden" 
          whileInView="visible"
          // animate="visible"
          className={`flex flex-row items-center py-[6px] px-4 ${isDark ? "bg-discount-gradient" : "light-bg-discount-gradient"} rounded-[10px] mb-2`}>  
          <FaBattleNet className='w-[32px] h-[32px] bg-text-gradient rounded-full mx-2' />
          <p className={`${styles.paragraph} ml-2 ${isDark ? "text-white" : "text-slate-800"}`}> Welcome to my portfolio website! </p>
        </motion.div>

          <motion.h1 
          variants={motionH1(0)} 
          initial="hidden" 
          whileInView="visible"
          // animate="visible"
          className={`${isDark ? "text-white" : "text-slate-800"} text-3xl sm:text-5xl lg:text-8xl font-semibold`}>
            Hi, I'm
            <span className={` ${isDark ? "bg-primary-600" : "light-text-gradient"}`}> 
            </span> <br />
            <TypeAnimation 
              sequence={[
                "Tran Phi Hung", 
                1500,
                "ML Engineer", 
                1500,
                "AI Engineer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className={`text-animation-gradient sm:text-[80px] text-[30px] ss:leading-[100px]`}
            />

          </motion.h1>

          <motion.p 
            variants={motionH1(0.5)} 
            initial="hidden" 
            whileInView="visible"
            // animate="visible"
            className={`${styles.paragraph} max-w-[470px] w-full mt-10 pr-10 ${isDark ? "text-slate-400" : "text-slate-800"} text-justify`}> 
            This space is dedicated to showcasing my career journey, expertise, and the knowledge I’ve gained over the years. Here, you'll find a curated overview of my work, skills, and experiences that define my professional path.
          </motion.p>
       </div>

       <motion.div 
          initial={{opacity: 0, x: 100}}
          // animate={{opacity: 1, x: 0}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.8, ease: "easeOut", delay: 0.8}}

          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img 
          src="../public/assets/bg.png"  
          alt="background" 
          className='w-[100%] h-[100%] relative z-[5] box-s rounded-3xl'
          />
          <div className={`absolute inset-0 z-10 pointer-events-none bg-transparent ${isDark ? "shadow-[0_0_30px_30px_white]" : "shadow-[0_0_30px_30px_pink]"} filter blur-[10px]`}></div>
          <div className={`absolute inset-[10px] z-10 pointer-events-none bg-transparent ${isDark ? "shadow-[0_0_30px_30px_white]" : "shadow-[0_0_30px_15px_pink]"} filter blur-[20px]`}></div>
          <div className={`absolute z-[0] w-[48%] h-[35%] top-0 ${isDark ? "pink__gradient" : "rose__gradient"} `}></div>
          <div className={`absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 ${isDark ? "white__gradient" : "rose__gradient"}  `}></div>
          <div className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue_gradient ${isDark ? "pink__gradient" : "rose__gradient"} `}></div>
       </motion.div>
    </section>
  )
}

export default pagesmain