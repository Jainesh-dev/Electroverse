import React from "react";
import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  return (
    <div className="absolute top-0 left-0 h-[100%] w-[100%] z-50 bg-black">
      <Spline scene="https://prod.spline.design/S6SsdZ9QwvynL98u/scene.splinecode" />
    </div>
  );
}
