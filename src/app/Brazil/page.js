"use client";
import React from "react";
import ChartTest from "../../../components/ChartTest";
import useMeasure from "react-use-measure";
//import useMeasure from "react-use-measure";

// TODO: Chart Animation Fade In

export default function Page() {
  // This hook allows us to dynamically measure our components
  let [ref, bounds] = useMeasure();

  return (
    <div className="flex flex-col justify-center items-center border-2">
      <h1>Brazil Page</h1>
      <div className="text-blue-400 border-2 h-40 w-80" ref={ref}>
        {/* ref is used for the useMeasure Hook to measure the size of component */}
        <ChartTest height={bounds.height} width={bounds.width} />
      </div>
      <text> Hello </text>
    </div>
  );
}
