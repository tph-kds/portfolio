import { useMemo } from "react";
import { LINE_AMPLITUDE } from "@/contants/contants";
import { LineProps } from "@/contants/types";


// Component to draw individual lines between timeline items
const ConnectingLines = ({ LineProps, isDark }: { LineProps: LineProps, isDark: boolean }) => {
  const amplitude = LINE_AMPLITUDE; // Horizontal extent of the S-curve
  const svgWidth = amplitude * 2; // Total width of the SVG container

  // Generates an array of SVG path data strings, one for each discrete segment
  const pathSegments = useMemo(() => {
    // Ensure itemCentersYRelativeToTrack is a valid array with at least two points and all are finite numbers
    if (!Array.isArray(LineProps.itemCentersYRelativeToTrack) || LineProps.itemCentersYRelativeToTrack.length < 2 || !LineProps.itemCentersYRelativeToTrack.every(center => typeof center === 'number' && isFinite(center))) {
      return [];
    }

    const segments = [];
    for (let i = 0; i < LineProps.itemCentersYRelativeToTrack.length - 1; i++) {
      const yStart = LineProps.itemCentersYRelativeToTrack[i];      // Vertical center of the current item's marker dot relative to track top
      const yEnd = LineProps.itemCentersYRelativeToTrack[i + 1];      // Vertical center of the next item's marker dot relative to track top

      if (typeof yStart !== 'number' || typeof yEnd !== 'number' || !isFinite(yStart) || !isFinite(yEnd)) {
          console.error(`ConnectingLines: Invalid item center Y value found at index ${i} or ${i+1}`, { yStart, yEnd });
          continue; // Skip this segment if data is invalid
      }

      const yMid = yStart + (yEnd - yStart) / 2; // Midpoint for Bezier curve control

      let startX, endX; // Horizontal positions for the start and end of the segment within the SVG

      // Determine horizontal positions based on whether the current item (i) is even or odd.
      // This aligns with the marker dot positions:
      // Even index items have dots at '50%' (SVG X = amplitude).
      // Odd index items have dots at 'calc(50% - LINE_AMPLITUDE)' (SVG X = 0).
      if (i % 2 === 0) {
        // Segment starts from an even item (dot on the right side of the SVG center)
        startX = amplitude;
        // Segment ends at the next item (i+1), which is odd (dot on the left side of the SVG center)
        endX = 0;
      } else {
        // Segment starts from an odd item (dot on the left side of the SVG center)
        startX = 0;
        // Segment ends at the next item (i+1), which is even (dot on the right side of the SVG center)
        endX = amplitude;
      }

      // Adjust control points to make the curve bend slightly towards the center (amplitude/2)
      // This creates a smoother connection between the alternating sides.
      const controlX1 = startX === amplitude ? amplitude * 0 : amplitude * 1;
      const controlX2 = endX === amplitude ? amplitude * 0 : amplitude * 1 ;

      // SVG path data for this individual curve segment:
      // M = Move to (startX, yStart) - Start point at the horizontal center of the current item's dot, vertical center of the item.
      // C = Cubic Bezier curve to (endX, yEnd) - End point at the horizontal center of the next item's dot, vertical center of the next item.
      // Control points: (controlX1, yMid) and (controlX2, yMid) for shaping the curve.
      segments.push(`M ${startX} ${yStart} C ${controlX1}, ${yMid}, ${controlX2}, ${yMid}, ${endX} ${yEnd}`);
    }
    return segments;
  }, [LineProps.itemCentersYRelativeToTrack, amplitude]); // Dependency on itemCentersYRelativeToTrack and amplitude

  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <svg
      className="absolute top-0 bottom-0 left-1/2" // Center the SVG container
      style={{ transform: 'translateX(-25%)', height: `${LineProps.height}px`, overflow: 'visible' }}
      width={svgWidth} // SVG width accommodates the full horizontal extent of the S-curves
      height={LineProps.height}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {/* Gradient and glow definitions remain the same */}
        <linearGradient id="timelineGradientV6" x1="0%" y1="0%" x2="0%" y2="100%">
        
          {isDark 
            ? <stop offset="0%" stopColor="rgba(0, 220, 220, 0.9)" />
            : <stop offset="0%" stopColor="rgba(255, 238, 82, 0.9)" /> } 
          {isDark 
            ? <stop offset="50%" stopColor="rgba(0, 120, 255, 0.8)" />
            : <stop offset="50%" stopColor="rgba(248, 73, 230, 0.8)" /> } 
          {isDark 
            ? <stop offset="100%" stopColor="rgba(120, 70, 200, 0.7)" />
            : <stop offset="100%" stopColor="rgba(255, 47, 47, 0.734)" /> }

{/* 
          <stop offset="0%" stopColor="rgba(0, 220, 220, 0.9)" />
          <stop offset="50%" stopColor="rgba(0, 120, 255, 0.8)" />
          <stop offset="100%" stopColor="rgba(120, 70, 200, 0.7)" /> */}

          
        </linearGradient>
        <filter id="timelineGlowV6">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Map over the generated path segments and render each as a separate path */}
      {pathSegments.map((segmentD, index) => (
        <path
          key={`segment-${index}`}
          d={segmentD}
          stroke="url(#timelineGradientV6)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#timelineGlowV6)"
        />
      ))}
    </svg>
  );
};


export default ConnectingLines;