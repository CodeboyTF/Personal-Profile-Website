import React, { useEffect, useState } from "react";
import "../APP.css";

const VisitCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/fhatuwanitsoftwaredev.netflify.app/visits")
      .then((res) => res.json())
      .then((data) => setVisits(data.value));
  }, []);

  return (
    <div className="visit-counter">
      👀 {visits} visits
    </div>
  );
};

export default VisitCounter;
