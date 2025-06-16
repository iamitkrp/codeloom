"use client";

import React, { Suspense } from "react";
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center bg-black">
          <div className="text-white text-xl">Loading 3D Scene...</div>
        </div>
      }>
        <Spline 
          scene="/media/MAIN_3D.spline"
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
};

export default Home;
