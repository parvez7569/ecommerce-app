import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { useLocation } from "react-router-dom";

const RouteLoading = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setProgress(30);

    const timer = setTimeout(() => {
      setProgress(100);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <LoadingBar
      color="#2563eb"
      progress={progress}
      height={4}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default RouteLoading;