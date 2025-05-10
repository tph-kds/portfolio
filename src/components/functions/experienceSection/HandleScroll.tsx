import { useState, useEffect, useRef } from 'react';
import { experiencesData, ExperienceData } from '@/contants/types';
import { BriefcaseIcon, BuildingIcon, BrainIcon } from '@/contants/types';
import {MARBLE_SIZE, MARKER_DOT_SIZE, LINE_AMPLITUDE,QUOTE_OFFSET_MD} from '@/contants/contants';
import { HandleScrollProps } from '@/contants/types';

const handleScroll = (handleScrollProps: HandleScrollProps) => {
    // console.log("handleScroll running...");
    const viewportCenterY = window.innerHeight / 2;
    let closestItemIndex = -1;
    let minDistanceToViewportCenter = Infinity;

    handleScrollProps.itemRefs.current.forEach((itemRef, index) => {
    const itemEl = itemRef.current;
    if (itemEl) {
        const itemRect = itemEl.getBoundingClientRect();
        const itemCenterYInViewport = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(itemCenterYInViewport - viewportCenterY);

        // Determine active item based on proximity to the viewport center
        if (distance < minDistanceToViewportCenter) {
        minDistanceToViewportCenter = distance;
        closestItemIndex = index;
        }
    }
    });

    // Update active index if a valid item is found
    if (closestItemIndex !== -1 && closestItemIndex !== handleScrollProps.activeIndex) {
        handleScrollProps.setActiveIndex(closestItemIndex);
    // console.log("handleScroll: Updated activeIndex to", closestItemIndex);
    }

    // Calculate and set marble position based on the active item's center relative to the track
    if (handleScrollProps.activeIndex !== -1 && handleScrollProps.itemRefs.current[handleScrollProps.activeIndex]?.current && handleScrollProps.timelineTrackRef.current) {
        const activeItemEl = handleScrollProps.itemRefs.current[handleScrollProps.activeIndex].current;
        const trackTop = handleScrollProps.timelineTrackRef.current.getBoundingClientRect().top + window.scrollY;
        if (activeItemEl && typeof activeItemEl.getBoundingClientRect().top === 'number' && isFinite(activeItemEl.getBoundingClientRect().top) && typeof activeItemEl.offsetHeight === 'number' && isFinite(activeItemEl.offsetHeight)) {
            const activeItemCenterRelativeToDocument = activeItemEl.getBoundingClientRect().top + window.scrollY + activeItemEl.offsetHeight / 2;
            const newMarbleTopRelativeToTrack = activeItemCenterRelativeToDocument - trackTop - MARBLE_SIZE / 2;

            if (typeof newMarbleTopRelativeToTrack === 'number' && isFinite(newMarbleTopRelativeToTrack)) {
                handleScrollProps.setMarbleTopRelativeToTrack(newMarbleTopRelativeToTrack);
                // console.log("handleScroll: Updated marbleTopRelativeToTrack to", newMarbleTopRelativeToTrack);
            } else {
                console.warn("handleScroll: Calculated invalid newMarbleTopRelativeToTrack:", newMarbleTopRelativeToTrack);
            }
        } else {
            console.warn("handleScroll: Active item ref or properties invalid for marble position calculation.");
        }
    } else if (experiencesData.length > 0 && handleScrollProps.timelineTrackRef.current && handleScrollProps.itemRefs.current[0]?.current) {
        // Fallback for initial render or if activeIndex is -1
        const firstItemEl = handleScrollProps.itemRefs.current[0].current;
        const trackTop = handleScrollProps.timelineTrackRef.current.getBoundingClientRect().top + window.scrollY;
        if (firstItemEl && typeof firstItemEl.getBoundingClientRect().top === 'number' && isFinite(firstItemEl.getBoundingClientRect().top) && typeof firstItemEl.offsetHeight === 'number' && isFinite(firstItemEl.offsetHeight)) {
            const initialMarbleTopRelativeToTrack = (firstItemEl.getBoundingClientRect().top + window.scrollY + firstItemEl.offsetHeight / 2) - trackTop - MARBLE_SIZE / 2;
            if (typeof initialMarbleTopRelativeToTrack === 'number' && isFinite(initialMarbleTopRelativeToTrack)) {
                handleScrollProps.setMarbleTopRelativeToTrack(initialMarbleTopRelativeToTrack);
                // console.log("handleScroll: Set initial marbleTopRelativeToTrack fallback.");
            } else {
                console.warn("handleScroll: Calculated invalid initialMarbleTopRelativeToTrack fallback:", initialMarbleTopRelativeToTrack);
            }
        } else {
            console.warn("handleScroll: First item ref or properties invalid for initial marble position fallback.");
        }
    } else {
        // Default marble position if no data or refs are ready
        const defaultMarbleTop = MARKER_DOT_SIZE / 2 - MARBLE_SIZE / 2;
        if (typeof defaultMarbleTop === 'number' && isFinite(defaultMarbleTop)) {
            handleScrollProps.setMarbleTopRelativeToTrack(defaultMarbleTop);
        } else {
            console.warn("handleScroll: Calculated invalid defaultMarbleTop fallback:", defaultMarbleTop);
        }
    }
};

export default handleScroll;