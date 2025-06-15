"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScrolling = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null;
};

export default SmoothScrolling; 