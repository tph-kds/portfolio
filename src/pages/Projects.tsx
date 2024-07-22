import ProjectCard from '@/components/functions/ProjectCard'
import { Props } from '@/contants/contants'
import React from 'react'


const Projects = () => {
  return (
    <div className='subtle-gradient-border-b border-neutral-900 pd-4'>
        <h1 className='my-20 text-center text-4xl text-white'> 
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 pb-20'>
            {Props.map((props, index) => (
                <ProjectCard 
                    key={index}
                    src={props.src}
                    title={props.title}
                    description={props.description}
                />
            ))}
        </div>
    </div>
  )
}

export default Projects