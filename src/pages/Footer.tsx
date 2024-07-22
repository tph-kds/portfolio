import { contact, service } from '@/contants/contants'
import styles from '@/style'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
            sm:flex-row flex-col blur-background rounded-[20px] box-shadow`}
    >
      <div className={`${styles.flexStart} flex flex-col w-full md:flex-row`}>
        <div className='flex-[1.5px] w-full flex flex-row justify-start sm:mt-0 mt-0 sm:px-20 px-0'>
          {service.map((ser, index) => (
            <div key={index}
                 className="flex flex-col sm:my-0 my-4 min-w-[150px] sm:px-20 px-0"
            >
              <h4 className='font-poppins font-medium sm:text-[18px] text-[16px]  leading-[27px] text-white'>
                {ser.title}
              </h4>
              <ul className='list-none mt-4 grid'>
                {ser.components.map((copt, index) => (
                  <Link key={index}
                        to={`/${ser.title}/${copt.name}`}
                        className={`font-poppins font-normal sm:text-[16px] text-[14px] 
                                  leading-[24px] text-white 
                                  hover:text-rose-300 cursor-pointer
                                  ${index !== copt.url.length - 1} ? "mb-4" : "mb-0"`}  
                  >
                    {copt.name}
                  </Link>
                ))}
              </ul>
            </div>
          ))};
            <div className="flex flex-col sm:my-0 my-4 min-w-[150px] sm:px-20 px-0">
              <h4 className='font-poppins font-medium sm:text-[18px] text-[16px] leading-[27px] text-white'>
                {contact.title}
              </h4>
              <div className='grid list-none mt-4'>
                <p className='text-left sm:py-1 py-0 sm:text-[16px] text-[14px] leading-[24px] text-gray-400 inline-block '>Address: 
                  <span className='ml-2'>
                    {contact.address}
                  </span>
                </p>
                <p className='text-left sm:py-1 py-0 sm:text-[16px] text-[14px] leading-[24px] text-gray-400 inline-block '>
                  Email:
                  <span className='ml-2'>
                    {contact.email}
                  </span>
                </p>
                <p className='text-left sm:py-1 py-0 sm:text-[16px] text-[14px] leading-[24px] text-gray-400 inline-block '>My phone: 
                  <span className='ml-2'>
                    {contact.phoneNo}
                  </span>
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer