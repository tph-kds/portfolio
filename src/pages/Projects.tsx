import isCheckedMode from '@/components/functions/ischeckedMode';
import ProjectCard from '@/components/functions/ProjectCard'
import { Props } from '@/contants/contants'
import React from 'react'
import { motion } from 'framer-motion';


const Projects = () => {
    const isDark = isCheckedMode();
  return (
    <div id='projects' className='subtle-gradient-border-b border-neutral-900 pd-4'>
        <h1 className={`${isDark ? "text-white" : "text-black font-semibold"} my-20 text-center text-4xl `}> 
            My Projects
        </h1>
        <motion.div 
            initial={{ opacity: 0 }}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1 }}

            className='h-full w-full flex flex-col md:flex-row gap-10 px-10 pb-20'>
            {Props.map((props,  index) => (
                <ProjectCard 
                    index = {index}
                    key={index}
                    src={props.src}
                    title={props.title}
                    description={props.description}
                    link={props.link}

                />
            ))}
        </motion.div>
    </div>
  )
}

export default Projects