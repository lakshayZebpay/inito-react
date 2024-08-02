"use client";
import { useState, useLayoutEffect } from "react";

function useIsMobileScreen() {
  const [isMobileScreen, setIsLargeScreen] = useState(false);

  useLayoutEffect(() => {
    setIsLargeScreen(window.matchMedia("(max-width: 650px)").matches);

    // I write this into a function for better visibility
    const handleResize = (e: any) => {
      setIsLargeScreen(e.matches);
    };

    const mediaQuery = window.matchMedia("(max-width: 650px)");

    mediaQuery.addEventListener("change", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return {
    isMobileScreen,
  };
}

export default useIsMobileScreen;
