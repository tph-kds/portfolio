import { useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import { TextValueProps } from '@/contants/types'



const AnimationText = ({ value }: TextValueProps ) => {
    const ref = useRef<HTMLDivElement>(null);
   
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
        motionValue.set(value);
        }

    }, [ isInView, value, motionValue ]);

//   useEffect(() => {
//     springValue.on("change", (latest) => {
//       if (ref.current !== null && latest.toFixed(0) >= value) {
//         ref.current.textContent = latest.toFixed(0);
//       }
//     });

//   }, [ springValue, value ]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current  && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [ springValue, value ]);
  

  return <span ref={ref}>{value}</span>
}

export default AnimationText