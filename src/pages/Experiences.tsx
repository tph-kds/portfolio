import React from 'react'
import { Experience} from '@/contants/contants'

const Experiences = () => {
  return (
    <div className='subtle-gradient-border-b border-neutral-900 pd-4'>
        <h1 className='my-20 text-center text-4xl text-white'> 
            Experiences
        </h1>
        <div>
            {Experience.map((exp, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'> 
                    <div className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'> 
                            {exp.year}
                        </p>
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
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
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experiences