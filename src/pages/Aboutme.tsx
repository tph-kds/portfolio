import { about_skill, about_text } from '@/contants/contants'
import styles from '@/style'
import React from 'react'
// import logo from "../public/assets/logo.png"

const Aboutme = () => {
  return (
    <div className='subtle-gradient-border-b border-neutral-900 pd-4'>
        <h1 className='my-20 text-center text-2xl sm:text-4xl text-white'> 
            About
            <span className='text-neutral-300'> Me </span>
        </h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className={`flex ${styles.flexCenter} `}>
                    <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="my-image" 
                         className='rounded-2xl'    
                    />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className={`flex ${styles.flexCenter} lg:justify-start`}>
                    {/* <p className='my-8 max-w-xl py-6 text-slate-200'> aboutme </p> */}
                    {about_text.map((about, index) => (
                        <p key={about.id} className=' text-justify indent-10 my-8 max-w-xl py-6 text-neutral-400'> 
                            {about.content} 
                        </p>
                    ))};
                </div>
            </div>
        </div>

        <div className='flex w-full justify-around sm:m-12 m-0'>
            {about_skill.map((skill, index) => (
                <div key={skill.id} className='flex flex-row items-center sm:gap-2 '>
                    <div className='flex flex-col px-4'>
                        <h1 className='sm:text-4xl text-xl text-center text-orange-300 '>
                            {skill.number}
                            <span className=''> 
                                {skill.finall_suffix}
                            </span>
                        </h1>
                        <p className='sm:text-3xl text-center text-gradient-b-w uppercase ' >
                            {skill.name}
                        </p>
                    </div>
                    <div className='flex flex-col mt-12'>
                        <hr className='bg-white h-20 w-[1px] items-center mb-10'/>
                    </div>
                </div>
            ))};
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