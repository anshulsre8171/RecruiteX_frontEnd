import  {useLocation} from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;