import React, { useEffect, useState } from 'react'
import { Experience} from '@/contants/contants'
import "@/custom.css"
import isCheckedMode from '@/components/functions/ischeckedMode';
import { motion } from 'framer-motion';

const Experiences = () => {
    const [checkExperience, setCheckExperience] = useState<boolean>(false);
    const isDark = isCheckedMode();
    useEffect(() => {
        // Check if the Experience array is empty
        if (Experience.length === 0) {
            setCheckExperience(false);
        } else {
            setCheckExperience(true);
        }
    }, []);

  return (
    <div id='experiments' className='subtle-gradient-border-b border-neutral-900 pd-4'>
        <motion.h1 
            initial={{ opacity: 0, y: -100 }}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 , }}
            whileInView={{ opacity: 1, y: 0 }}

            className={`${isDark ? "text-white" : "text-black font-semibold"} my-20 text-center text-4xl `}> 
            Experiences
        </motion.h1>
        <div>
            {checkExperience ? (
                Experience.map((exp, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'> 
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'> 
                            {exp.year}
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 200 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold text-slate-300'>
                            {exp.role} -  
                            <span className='pl-2 text-sm text-purple-100'>
                                {exp.company}
                            </span>
                        </h6>
                        <p className='mb-4 text-neutral-400'>
                            {exp.description}
                        </p>
                        {exp.technologies.map((tech, index) => (
                            <span key={index} 
                                  className='mr-2 mt-4 border-2 border-l-pink-400 border-r-blue-600 border-t-slate-700 rounded shadow shadow-pink-600 px-2 py-1 text-sm font-medium text-cyan-500'> 
                                {tech} 
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))) :  (        
                 <motion.h1 
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className={`sm:text-2xl text-xl font-semibold font-poppins text-center mb-20 ${isDark ? "text-gradient" : "text-pink-700"} `}>
                    I'm in the process of looking for an internship at the company.
                </motion.h1>
        )}
        </div>
    </div>
  )
}

export default Experiences