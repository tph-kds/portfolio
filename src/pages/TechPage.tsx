import styles from '@/style'
import { RiOpenaiFill, RiReactjsLine } from 'react-icons/ri'
import { FaDocker, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiPytorch, SiTensorflow } from "react-icons/si";
import { useEffect, useRef } from 'react';
import isCheckedMode from '@/components/functions/ischeckedMode';
import { motion } from 'framer-motion';

const TechPage = () => {
  const isDark = isCheckedMode();
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        if (!scroller.hasAttribute("data-animated")) {
          scroller.setAttribute("data-animated", "true");

          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner?.children || []);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner?.appendChild(duplicatedItem);
          });

          // Set the width reduction to 25%
          // const scrollWidth = scrollerInner?.scrollWidth || 0;
          // scrollerInner?.style.setProperty('--scroll-width', `${scrollWidth * 0.25}px`);
        }
      });
    }
  }, []);
  return (
    <div id='technologies' className='border-b border-neutral-800 pb-24'>
      <motion.h1 
        initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true , amount: 1}}

        className={`${isDark ? "text-white" : "text-black font-semibold"} my-20 text-center text-2xl sm:text-4xl `}> 
        Technologies
      </motion.h1>
      <div data-speed="fast" className={` max-w-7xl scroller flex flex-wrap ${styles.flexCenter} gap-4 overflow-hidden whitespace-nowrap md:mx-40`}
      >
        <motion.div  
          initial={{ opacity: 0, x : 200}}
          // animate={{ opacity: 1, x : 0}}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ opacity: 1, x : 0}}

          className="scroller__inner inline-block whitespace-nowrap animate-scroll">
          <div  className=" inline-block m-4 rounded-full border-4 border-emerald-400 p-4 relative icon">
            <RiReactjsLine  className='sm:text-7xl text-4xl text-cyan-600'/>
          </div>
          <div  className="inline-block m-4 rounded-full border-4 border-emerald-400 p-4 relative icon">
            <FaPython  className='sm:text-7xl text-4xl text-amber-400'/>
          </div>
          <div className="inline-block m-4 rounded-full border-4 border-emerald-400 p-4 relative icon">
            <FaNodeJs   className='sm:text-7xl text-4xl text-green-600'/>
          </div>
          <div className="inline-block m-4 rounded-full border-4 border-emerald-400 p-4 relative icon">
            <SiMongodb   className='sm:text-7xl text-4xl text-green-500'/>
          </div>
          <div className="inline-block m-4 rounded-full border-4 border-emerald-400 p-4 relative icon">
            <SiPytorch    className='sm:text-7xl text-4xl text-cyan-600'/>
          </div>
          <div className="inline-block m-4 rounded-full border-4 border-emerald-400 p-4 relative icon">
            <SiTensorflow     className='sm:text-7xl text-4xl text-orange-600'/>
          </div>
          <div className="inline-block m-4 rounded-full border-4 border-emerald-400 p-4 relative icon">
            <RiOpenaiFill className='sm:text-7xl text-4xl text-slate-50'/>
          </div>
          <div className="inline-block m-4 rounded-full border-4 border-emerald-400 p-4 relative icon">
            <FaDocker className='sm:text-7xl text-4xl text-blue-50'/>
          </div>
          
        </motion.div>
      </div>
    </div>
  )
}

export default TechPage