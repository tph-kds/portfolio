import isCheckedMode from '@/components/functions/ischeckedMode';
import { about_skill, about_text } from '@/contants/contants'
import styles from '@/style'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import AnimationText from '@/components/functions/AnimationText';
import { TextValueProps } from '@/contants/types';

const Aboutme = () => {
    const isDark = isCheckedMode();
    // console.log(isDark);
    
    // create a state variable to store the click count
    const [clicks, setClicks] = useState<number>(0);
    const [numberProjects, setNumberProjects] = useState<number>(8);
    const [numberExperiences, setNumberExperiences] = useState<number>(1);

    useEffect(() => {
      // Load the click count from local storage when the component mounts
      const savedClicks = localStorage.getItem('clicks');
      if (savedClicks) {
        setClicks(Number(savedClicks));
      }

      const savedNumberProjects = localStorage.getItem('numberProjects');
      if (savedNumberProjects) {
          
        setNumberProjects(Number(savedNumberProjects));
      }

      const savedNumberExperiences = localStorage.getItem('numberExperiences');
      if (savedNumberExperiences) {
        setNumberExperiences(Number(savedNumberExperiences));
      }

      // Update data in contants.ts when the component mounts
      for (let i = 0; i < about_skill.length; i++) {
        if (about_skill[i].id === "noClients") {
          about_skill[i].number = clicks;
        }
        if (about_skill[i].id === "noProjects") {
          about_skill[i].number = numberProjects;
        }
        if (about_skill[i].id === "noExperiences") {
          about_skill[i].number = numberExperiences;
        }
      }
    }, [clicks, numberProjects, numberExperiences]);

    const savedNumberProjects = localStorage.getItem('numberProjects');
    if (savedNumberProjects) {
        
      setNumberProjects(Number(savedNumberProjects));
    }

    const savedNumberExperiences = localStorage.getItem('numberExperiences');
    if (savedNumberExperiences) {
      setNumberExperiences(Number(savedNumberExperiences));
    }

    // Update data in contants.ts when the component mounts
    for (let i = 0; i < about_skill.length; i++) {
      if (about_skill[i].id === "noClients") {
        about_skill[i].number = clicks;
      }
      if (about_skill[i].id === "noProjects") {
        about_skill[i].number = numberProjects;
      }
      if (about_skill[i].id === "noExperiences") {
        about_skill[i].number = numberExperiences;
      }
    }
  
    const handleClick = () => {
      const newClicks = clicks + 1;
      setClicks(newClicks);
      localStorage.setItem('clicks', newClicks.toString()); // Save the new click count
    };
    

  return (
    <div id='about_me' className='subtle-gradient-border-b border-neutral-900 pd-4'>
        <motion.h1 
            initial={{ opacity: 0, x: 100 }}
            // animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`my-20 text-center text-2xl sm:text-4xl ${isDark ? "text-white" : "text-black font-semibold"}`}> 
            About
            <span className={`${isDark ? "text-neutral-300" : "text-neutral-600"}`}> Me </span>
        </motion.h1>
        <div className='flex flex-wrap shadow-xl shadow-slate-600'>
            <motion.div 
                initial={{ opacity: 0, y: -100 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='w-full lg:w-1/2 lg:p-8'>
                <div className={`flex ${styles.flexCenter} `}>
                    <img src="../public/assets/logo.png" alt="my-image" 
                         className='rounded-2xl'    
                    />
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                // animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                className='w-full lg:w-1/2'>
                <div className={`flex ${styles.flexCenter} lg:justify-start`}>
                    {/* <p className='my-8 max-w-xl py-6 text-slate-200'> aboutme </p> */}
                    {about_text.map((about, index) => (
                        <p key={about.id} className={`text-justify indent-10 my-8 max-w-xl p-6 ${isDark ? "text-neutral-400" : "text-neutral-900"}`}> 
                            {about.content} 
                        </p>
                    ))}
                </div>
            </motion.div>
        </div>

        <div className='flex w-full justify-around sm:m-12 m-0'>
            {about_skill.map((skill, index) => (
                <div key={skill.id} className='flex flex-row items-center sm:gap-2 '>
                    <div className='flex flex-col px-4'>
                        <h1 className={`sm:text-4xl text-xl text-center ${isDark ? "text-orange-300" : "text-pink-600"}  `}>
                       < AnimationText value={skill.number} />
                            <span className=''> 
                                {skill.finall_suffix}
                            </span>
                        </h1>
                        <p className={`sm:text-3xl text-center ${isDark ? "text-gradient-b-w" : "light-text-gradient"}  uppercase `} >
                            {skill.name}
                        </p>
                    </div>
                    <div className='flex flex-col mt-12'>
                        <hr className='bg-white h-20 w-[1px] items-center mb-10'/>
                    </div>
                </div>
            ))}
            {/* <div className='flex flex-col items-center gap-2'>
                <h1 className='text-4xl text-center text-orange-300'>10*</h1>
                <p className='text-3xl text-center text-green-600 uppercase'>Year of Experiences</p>
            </div>
            <hr className='bg-white h-20 w-[1px] items-center'/>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-4xl text-center text-orange-300'>10*</h1>
                <p className='text-3xl text-center text-green-600 uppercase'>Year of Experiences</p>
            </div> */}
        </div>
    </div>
  )
}

export default Aboutme
