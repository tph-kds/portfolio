import { useEffect, useRef, useState } from "react";
import { CalculateItemCentersProps } from "@/contants/types";


const calculateItemCenters = (CalculateItemCentersProps: CalculateItemCentersProps) => {
    // console.log("calculateItemCenters running...");
    if (!CalculateItemCentersProps.timelineTrackRef.current || CalculateItemCentersProps.itemRefs.current.some(ref => !ref.current)) {
    // console.warn("calculateItemCenters: Refs not ready.");
    return [];
    }
    const trackTop = CalculateItemCentersProps.timelineTrackRef.current.getBoundingClientRect().top + window.scrollY;
    const centers = CalculateItemCentersProps.itemRefs.current.map((itemRef, index) => {
    const itemEl = itemRef.current;
    // Explicitly check if itemEl and its required properties exist and are valid numbers
    if (!itemEl || typeof itemEl.getBoundingClientRect().top !== 'number' || !isFinite(itemEl.getBoundingClientRect().top) || typeof itemEl.offsetHeight !== 'number' || !isFinite(itemEl.offsetHeight)) {
        console.warn(`calculateItemCenters: Invalid item element or properties for index ${index}.`, itemEl);
        return NaN; // Return NaN for invalid entries
    }
    // Calculate center relative to the top of the document, then subtract trackTop
    const centerRelativeToDocument = itemEl.getBoundingClientRect().top + window.scrollY + itemEl.offsetHeight / 2;
    const centerRelativeToTrack = centerRelativeToDocument - trackTop;
    // console.log(`Item ${index} center Y relative to track: ${centerRelativeToTrack}`);
    return centerRelativeToTrack;
    }).filter(center => typeof center === 'number' && isFinite(center)); // Filter out any non-finite numbers

    // console.log("Calculated item centers relative to track:", centers);
    return centers;
};

export default calculateItemCenters;
