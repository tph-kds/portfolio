import styles from '@/style'
import "@/custom.css"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaBattleNet } from "react-icons/fa";

const pagesmain = () => {
  return ( 
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
       <div className={`flex-1 sm:${styles.flexStart} ${styles.flexCenter}  flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>  
          <FaBattleNet className='w-[32px] h-[32px] bg-text-gradient rounded-full mx-2' />
          <p className={`${styles.paragraph} ml-2 text-white`}> Welcome to my Portfolio</p>
        </div>

          <h1 className={`text-white text-3xl sm:text-5xl lg:text-8xl font-semibold`}>
            <span className={`bg-primary-600`}>
              I'm 
            </span> <br />
            <TypeAnimation 
              sequence={[
                "Tran Phi Hung", 
                1500,
                "Machine Learning Engineer", 
                1500,
                "AI Engineer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className='text-gradient sm:text-[80px] text-[30px] ss:leading-[100px]'
            />

          </h1>

          <p className={`${styles.paragraph} max-w-[470px] w-full mt-10 pr-10 text-slate-400 text-justify indent-10`}> 
            Webstie is created in order to service the adding information and overview of knowledge for my career.
          </p>
       </div>

       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img 
          src="../public/assets/bg.png"  
          alt="background" 
          className='w-[100%] h-[100%] relative z-[5] box-s'
          />
                <div className="absolute inset-0 z-10 pointer-events-none bg-transparent shadow-[0_0_30px_30px_white] filter blur-[10px]"></div>
                <div className="absolute inset-[10px] z-10 pointer-events-none bg-transparent shadow-[0_0_30px_30px_white] filter blur-[20px]"></div>
          <div className='absolute z-[0] w-[48%] h-[35%] top-0 pink__gradient'></div>
          <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white_gradient '></div>
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue_gradient pink__gradient'></div>
       </div>
    </section>
  )
}

export default pagesmain