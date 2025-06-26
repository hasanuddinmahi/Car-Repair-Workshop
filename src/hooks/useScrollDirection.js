import { useState, useEffect } from "react";

export default function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if (scrollY > lastScrollY) setScrollDir("down");
      else if (scrollY < lastScrollY) setScrollDir("up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return scrollDir;
}
