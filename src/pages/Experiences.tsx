// import React, { useEffect, useState } from 'react'
import { Experience} from '@/contants/contants'
import "@/custom.css"
import isCheckedMode from '@/components/functions/ischeckedMode';
import { motion } from 'framer-motion';


import React, { useState, useEffect, useRef, useMemo } from 'react';
import { experiencesData, ExperienceData } from '../contants/types';
import { BriefcaseIcon, BuildingIcon, BrainIcon } from '../contants/types';
import {MARBLE_SIZE, MARKER_DOT_SIZE, LINE_AMPLITUDE,QUOTE_OFFSET_MD} from '../contants/contants';




// Placeholder ParticleBackground component (replace with your actual implementation)
const ParticleBackground: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => (
  <div className={`absolute inset-0 z-0 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
    {/* Your particle animation/background implementation goes here */}
  </div>
);


import Marble from '@/components/functions/experienceSection/MarbleDot';
import ConnectingLines from '@/components/functions/experienceSection/ConnecttingLine';
import TimelineItem from '@/components/functions/experienceSection/TimeLineItem';
import handleScroll from '@/components/functions/experienceSection/HandleScroll';
import calculateItemCenters from '@/components/functions/experienceSection/CalculateItemCenters';

// Main Experience Section Component - Modified to use ConnectingLines
const ExperienceSection = () => {
  const [marbleTopRelativeToTrack, setMarbleTopRelativeToTrack] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const timelineTrackRef = useRef<HTMLDivElement>(null);
  // Use a single ref to hold the array of item refs
  const itemRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  const [trackHeight, setTrackHeight] = useState(0);
  const [itemCentersYRelativeToTrack, setItemCentersYRelativeToTrack] = useState<number[]>([]);

  const isDark = isCheckedMode();

  // Initialize itemRefs array with nulls or createRefs based on data length
  useEffect(() => {
    itemRefs.current = experiencesData.map((_, i) => itemRefs.current[i] || React.createRef());
  }, [experiencesData.length]); // Re-initialize refs if data length changes

  useEffect(() => {
    // console.log("useEffect running...");
    if (experiencesData.length === 0) {
      // console.log("No experience data, skipping calculations.");
      return;
    }

    // Initial calculations and scroll handling
    const initialCenters = calculateItemCenters({
        itemRefs: itemRefs,
        timelineTrackRef: timelineTrackRef,
    });

    setItemCentersYRelativeToTrack(initialCenters);
    if (timelineTrackRef.current) {
        const initialTrackHeight = timelineTrackRef.current.offsetHeight;
        if (typeof initialTrackHeight === 'number' && isFinite(initialTrackHeight)) {
            setTrackHeight(initialTrackHeight);
        } else {
            console.warn("Initial track height is invalid:", initialTrackHeight);
        }
    }
    handleScroll( { itemRefs, activeIndex, setActiveIndex,  timelineTrackRef, setMarbleTopRelativeToTrack, setItemCentersYRelativeToTrack }); // Call initially to set correct positions and active item

    // Event listeners for scroll and resize
    const scrollListener = () => handleScroll({ itemRefs, activeIndex, setActiveIndex, timelineTrackRef, setMarbleTopRelativeToTrack, setItemCentersYRelativeToTrack });
    window.addEventListener('scroll', scrollListener, { passive: true });
    const resizeObserver = new ResizeObserver(entries => {
      // console.log("ResizeObserver callback running...");
      let newHeight = 0;
      let itemsChanged = false;
      for (let entry of entries) {
        if (entry.target === timelineTrackRef.current) {
          newHeight = entry.contentRect.height;
          // console.log("ResizeObserver: Track height changed to", newHeight);
        }
        // Check if any of the observed item elements have changed size
        if (itemRefs.current.some((ref) => ref?.current === entry.target)) {
            itemsChanged = true;
            // console.log("ResizeObserver: Item size changed.");
        }
      }
      // Update track height if it has changed and is valid
      if (newHeight > 0 && newHeight !== trackHeight && typeof newHeight === 'number' && isFinite(newHeight)) {
        setTrackHeight(newHeight);
      } else if (newHeight <= 0 || !isFinite(newHeight)) {
          // console.warn("ResizeObserver: Calculated invalid newHeight:", newHeight);
      }

      // Recalculate item centers and handle scroll if items or track height changed
      if (itemsChanged || (newHeight > 0 && newHeight !== trackHeight)) {
        // console.log("ResizeObserver: Recalculating centers and handling scroll.");
        const updatedCenters = calculateItemCenters( {
            itemRefs: itemRefs,
            timelineTrackRef: timelineTrackRef,
        });
        setItemCentersYRelativeToTrack(updatedCenters);
        handleScroll({ itemRefs, activeIndex, setActiveIndex, timelineTrackRef, setMarbleTopRelativeToTrack, setItemCentersYRelativeToTrack }); // Recalculate marble position and active item after resize
      }
    });

    // Observe the timeline track and each timeline item for size changes
    if (timelineTrackRef.current) {
      resizeObserver.observe(timelineTrackRef.current);
    }
    itemRefs.current.forEach(itemRef => {
      if (itemRef.current) resizeObserver.observe(itemRef.current);
    });

    // Cleanup function to remove event listeners and observer
    return () => {
      window.removeEventListener('scroll', scrollListener);
      // window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, [experiencesData.length, trackHeight, activeIndex]); // Added activeIndex dependency


  if (experiencesData.length === 0) {
    return (
      <section id="experiences" ref={sectionRef} className="py-16 md:py-24 bg-slate-900 text-white min-h-[60vh] flex flex-col justify-center relative overflow-hidden">
        <ParticleBackground isDarkMode={isDark} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            My <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="sm:text-2xl text-xl font-semibold text-slate-400">
            Experience section is currently empty.
          </p>
        </div>
      </section>
    );
  }

  // Add checks before rendering Marble and ConnectingLines to ensure props are valid
  const shouldRenderConnectingLines = Array.isArray(itemCentersYRelativeToTrack) && itemCentersYRelativeToTrack.length >= 2 && trackHeight > 0 && typeof trackHeight === 'number' && isFinite(trackHeight) && itemCentersYRelativeToTrack.every(center => typeof center === 'number' && isFinite(center));
    const shouldRenderMarble = activeIndex >= 0 && activeIndex < experiencesData.length && typeof marbleTopRelativeToTrack === 'number' && isFinite(marbleTopRelativeToTrack);


  return (
    <section id="experiences" ref={sectionRef} className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden rounded-lg">
      <ParticleBackground isDarkMode={isDark} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
        initial={{ opacity: 0, y: -100 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 , }}
        whileInView={{ opacity: 1, y: 0 }}

        className={`${isDark ? "text-white" : "text-black font-semibold"} text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20`}>
          My <span className={`${isDark ? "text-cyan-400" : "light-title-project"} `}>Experience</span>
        </motion.h1>
        {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20">
          My <span className="text-cyan-400">Experience</span>
        </h2> */}
        {/* Timeline Track Container */}
        <div ref={timelineTrackRef} className="relative max-w-4xl lg:max-w-5xl mx-auto ">
          {/* Render connecting lines only if itemCentersYRelativeToTrack is a valid array with enough points and trackHeight is valid */}
          {shouldRenderConnectingLines && (
            <ConnectingLines LineProps={{ height: trackHeight, itemCentersYRelativeToTrack: itemCentersYRelativeToTrack }} isDark={isDark} />
          )}
          {/* Render the scrolling marble only if activeIndex is valid and marbleTopRelativeToTrack is a valid number */}
          {shouldRenderMarble && (
              <Marble marbleDotProps={{ top: marbleTopRelativeToTrack, activeIndex: activeIndex }}  isDark={isDark}/>
          )}
          {/* Container for timeline items */}
          <div className="relative z-0">
            {experiencesData.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                ref={el => itemRefs.current[index] = { current: el }} // Assign ref using a callback
                experience={exp}
                isActive={activeIndex === index}
                index={index}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
        {/* Add some padding at the bottom to allow scrolling the last item into view */}
        <div className="min-h-[50vh]"></div>
      </div>
    </section>
  );
};

export default ExperienceSection;


