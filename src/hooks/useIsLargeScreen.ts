"use client";

import { useState, useLayoutEffect } from "react";

const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useLayoutEffect(() => {
    setIsLargeScreen(window.matchMedia("(min-width: 1024px)").matches);

    // I write this into a function for better visibility
    const handleResize = (e: any) => {
      setIsLargeScreen(e.matches);
    };

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    mediaQuery.addEventListener("change", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return {
    isLargeScreen,
  };
};

export default useIsLargeScreen;
