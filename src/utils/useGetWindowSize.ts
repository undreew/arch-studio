import { useEffect, useState } from "react";
import { BREAKPOINT_VALUES } from "../contants/breakpoints";

export type BreakPoint = "sm" | "md" | "lg" | "xl" | "2xl";

function getCurrentBreakpoint(width: number): BreakPoint {
  if (width >= BREAKPOINT_VALUES["2xl"]) return "2xl";
  if (width >= BREAKPOINT_VALUES["xl"]) return "xl";
  if (width >= BREAKPOINT_VALUES["lg"]) return "lg";
  if (width >= BREAKPOINT_VALUES["md"]) return "md";
  return "sm";
}

const useGetWindowSize = () => {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    breakpoint:
      typeof window !== "undefined"
        ? getCurrentBreakpoint(window.innerWidth)
        : "sm",
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setSize({
        width,
        height,
        breakpoint: getCurrentBreakpoint(width),
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useGetWindowSize;
