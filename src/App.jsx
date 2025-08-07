import React, { useState, useEffect } from "react";
import NavbarMenu from "./GlobalComponents/Navbar.jsx";
import UrlIcon from "./GlobalComponents/UrlIcon";
import Loading from "./GlobalComponents/Loading.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
        <UrlIcon />
          <NavbarMenu />
          
        </>
      )}
    </>
  );
}
