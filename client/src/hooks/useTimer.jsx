import { useState, useEffect } from "react";

const useTimer = () => {
  const [time, setTime] = useState(9);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        setTime(9)
      }

      setTime(prev => prev - 1)
        
      
    }, 1000);

    return () => clearInterval(interval);
  });

  return time
};

export default useTimer;