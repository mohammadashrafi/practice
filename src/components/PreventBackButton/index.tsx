import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PreventBackOnPopState = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(window.location.href);
    // Prevent going back to login page on popstate
    if (location.pathname == "/cart") {
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = function (event) {
        history.go(1);
      };
    }

    // Clean up function
    return () => {
      window.onpopstate = null;
    };
  }, [location]);

  return null; // This component doesn't render anything visible
};

export default PreventBackOnPopState;
