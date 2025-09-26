import React from "react";
import SplineScene from "./SplineScene";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black z-50">
      <SplineScene />
    </div>
  );
}
