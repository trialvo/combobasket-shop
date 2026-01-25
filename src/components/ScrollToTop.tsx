import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Skip scroll to top for home and category pages
    const isHomePage = pathname === "/";
    const isCategoryPage = pathname === "/products" && search.includes("category=");
    
    if (!isHomePage && !isCategoryPage) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
