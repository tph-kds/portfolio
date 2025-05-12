
import React, { useState, useEffect } from 'react';
import { experiencesData, ExperienceData } from '@/contants/types';
import { BriefcaseIcon, BuildingIcon, BrainIcon } from '@/contants/types';
import {MARBLE_SIZE, MARKER_DOT_SIZE, LINE_AMPLITUDE,QUOTE_OFFSET_MD} from '@/contants/contants';
import { TimelineItemProps } from '@/contants/types';

// Timeline Item Component - Modified quote positioning
const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>((timeLineItemProps, ref) => {
  const { company, role, duration, description, icon, technologies, quote } = timeLineItemProps.experience;
  const isEven = timeLineItemProps.index % 2 === 0;
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMediumScreen(window.innerWidth >= 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Marker dot position relative to the timeline track center line (50%)
  const markerDotLeft = isEven ? '55%' : `calc(50% - ${LINE_AMPLITUDE - 10}px)`;

  // Quote positioning classes for medium screens and up
  const quotePositionClassesMd = isEven
    ? `right-[calc(50% + ${QUOTE_OFFSET_MD}px)] text-right` // Quote on the right for even index (content left)
    : `left-[calc(50% + ${QUOTE_OFFSET_MD}px)] text-left`; // Quote on the left for odd index (content right)

  return (
    <div
      ref={ref}
      className={`relative flex items-center w-full py-10 ${isEven ? 'justify-start flex-row-reverse md:flex-row' : 'justify-start'}`}
    >
      {/* Marker Dot */}
      <div
        className={`absolute top-1/2 rounded-full border-2 transition-all duration-300 ease-in-out
                   ${timeLineItemProps.isActive ? 'bg-cyan-300 border-cyan-200 scale-150 shadow-lg shadow-cyan-500/50' : 'bg-slate-600 border-slate-500'}`}
        style={{
          width: MARKER_DOT_SIZE,
          height: MARKER_DOT_SIZE,
          left: markerDotLeft,
          transform: `translate(-50%, -50%)`,
          zIndex: 10,
        }}
      />
      {/* Content Block */}
      <div
                //    bg-slate-800/70 backdrop-blur-lg border border-slate-700
                //    hover:border-cyan-400
        className={`p-6 rounded-xl shadow-2xl transition-all duration-500 ease-in-out w-full md:w-[45%]
                   ${timeLineItemProps.isDark ? 'backdrop-blur-lg border border-slate-700 hover:border-cyan-400 bg-slate-800/70' : 'backdrop-blur-lg border border-pink-700 shadow-stone-600 hover:border-pink-600 '}
                   ${timeLineItemProps.isActive ? 'border-cyan-400 shadow-cyan-400/20 scale-105' : 'opacity-70 hover:opacity-100'}
                   ${isEven
                     ? 'md:mr-0 md:ml-[calc(50%+40px)] lg:ml-[calc(50%+50px)]' // mr-auto md:mr-0 md:ml-[calc(50%+40px)] lg:ml-[calc(50%+50px)] Content on the left for even index on md+
                     : 'md:ml-0 md:mr-[calc(50%+40px)] lg:mr-[calc(50%+50px)]' // ml-auto md:ml-0 md:mr-[calc(50%+40px)] lg:mr-[calc(50%+50px)] Content on the right for odd index on md+
                   }
                   md:m-0 m-[45px]
                   `}
        style={{ zIndex: 15 }}
      >
        <div className="flex items-center mb-3">
          <span className={`mr-3 p-2.5 rounded-full ${
            timeLineItemProps.isActive 
            ? timeLineItemProps.isDark 
                ? 'bg-cyan-500/25 shadow-inner shadow-cyan-400/30' 
                : 'bg-orange-200 shadow-inner shadow-orange-400/30'    
            : 'bg-slate-700/50'}`}>
            {icon || <BriefcaseIcon />}
          </span>
          <div>
            <h3 className={`text-xl lg:text-2xl font-bold ${
                timeLineItemProps.isActive 
                ? timeLineItemProps.isDark 
                    ? 'text-cyan-300'
                    : 'text-pink-600' 
                : 'text-white'}`}>{company}</h3>
            <p className={`text-md lg:text-lg ${
                timeLineItemProps.isActive 
                ? timeLineItemProps.isDark 
                    ? 'text-cyan-400'
                    : 'text-pink-500' 
                : 'text-sky-300'}`}>{role}</p>
          </div>
        </div>
        <p className={`"text-sm ${timeLineItemProps.isDark ? 'text-slate-400' : 'text-slate-500'} mb-3"`}>{duration}</p>
        <p className={`"text-sm sm:text-base ${timeLineItemProps.isDark ? ' text-slate-300' : 'text-slate-800'} leading-relaxed mb-4"`}>{description}</p>

        {/* Quote for small screens (inside content block) */}
        {quote && !isMediumScreen && (
            <div className={`transition-opacity duration-700 ease-in-out mt-4 ${timeLineItemProps.isActive ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                {timeLineItemProps.isActive && (
                <p className={`"text-xs sm:text-sm italic ${timeLineItemProps.isDark ? 'text-cyan-500/80 border-l-2 border-cyan-600' : 'text-rose-500/80 border-l-2 border-rose-600'} pl-3 py-1"`}>
                    "{quote}"
                </p>
                )}
            </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-700/50">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`inline-block px-3 py-1.5 text-xs font-medium rounded-full
                              ${timeLineItemProps.isActive
                                ? timeLineItemProps.isDark 
                                    ? 'text-cyan-100 bg-cyan-600/40 border border-cyan-500/60'
                                    : 'text-pink-200 bg-pink-600/80 border border-pink-500/60'
                                : 'text-slate-300 bg-slate-700/70 border border-slate-600/90'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quote for medium screens and up (positioned outside content block) */}
      {quote && isMediumScreen && (
        <div
          className={`
            absolute top-1/2
            max-w-[200px] lg:max-w-[250px]
            px-2
            transition-all duration-500 ease-in-out
            ${timeLineItemProps.isActive ? 'opacity-100' : 'opacity-70 pointer-events-none'}
            ${!isEven ? 'right-0 md:right-auto md:left-[calc(50%+30px)] lg:left-[calc(50%+40px)]' : 'left-0 md:left-auto md:right-[calc(75%+40px)] lg:right-[calc(75%+50px)]'}
            ${quotePositionClassesMd} {/* Apply calculated positioning classes */}
          `}
          style={{
            transform: `translateY(-50%) ${timeLineItemProps.isActive ? 'translateX(100px)' : (isEven ? 'translateX(300px)' : 'translateX(-300px)') }`, // Adjusted translateX for hover effect
            zIndex: 12
          }}
        >
          <p className={`text-xs sm:text-2xl italic ${
            timeLineItemProps.isActive 
            ? timeLineItemProps.isDark 
                ? 'text-cyan-400' 
                : 'text-fuchsia-600'
            : 'text-slate-600'
            } `}>
            "{quote}"
          </p>
        </div>
      )}
    </div>
  );
});
TimelineItem.displayName = 'TimelineItem';


export default TimelineItem;
