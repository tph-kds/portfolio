import React from 'react'


type Props = {
    title:string;
    src: string;
    description: string;
}

const ProjectCard = ({src, title, description} : Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-slate-500'>
        <img src={src} 
             alt={title}
             width={1000}
             height={1000}
             className='w-full object-contain' 
        />
        <div className='relative p-4'>
            <h1 className='text-xl lg:text-2xl font-semibold text-white'>
                {title}
            </h1>
            <p className='mt-2 text-gray-300 text-sm lg:text--xl'> {description} </p>
        </div>
    </div>
  )
}

export default ProjectCard