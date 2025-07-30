import React, { useState, useEffect } from "react";
import NavbarMenu from "./GlobalComponents/navbar";
import UrlIcon from "./GlobalComponents/UrlIcon";
import Loading from "./GlobalComponents/Loading.jsx";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavbarMenu />
          <UrlIcon />
        </>
      )}
    </>
  );
}
