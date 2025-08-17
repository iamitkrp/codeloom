"use client";

import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <spline-viewer url="/media/MAIN_3D.spline" style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
};

export default Home;
