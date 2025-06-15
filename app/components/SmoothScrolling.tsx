"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
};

export default SmoothScrolling; 