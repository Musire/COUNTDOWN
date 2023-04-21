import { useState, useEffect } from "react";

const useAnimation = (variant, first, second ) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const times = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }

  const [animateDays, setAnimateDays] = useState(false);
  const [animateHours, setAnimateHours] = useState(false);
  const [animateMinutes, setAnimateMinutes] = useState(false);
  const [animateSeconds, setAnimateSeconds] = useState(false);

  const animations = {
    days: animateDays,
    hours: animateHours,
    minutes: animateMinutes,
    seconds: animateSeconds
  }

  const deadline = "December, 31, 2023";
  const animationDuration = 400


  const time = Date.parse(deadline) - Date.now()


  const getDays = () => {
    const newDays = Math.floor(time / (1000 * 60 * 60 * 24))
    if (days !== newDays) {
      setAnimateDays(true)
      setTimeout(() => setAnimateDays(false), animationDuration)
      setDays(newDays)
    }
  }

  const gethours = () => {
    const newHours = Math.floor((time / (1000 * 60 * 60)) % 24)
    if (hours !== newHours) {
      setAnimateHours(true)
      setTimeout(() => setAnimateHours(false), animationDuration)
      setHours(newHours)
    }
  }

  const getMinutes = () => {
    const newMinutes = Math.floor((time / 1000 / 60) % 60)
    if (minutes !== newMinutes) {
      setAnimateMinutes(true)
      setTimeout(() => setAnimateMinutes(false), animationDuration)
      setMinutes(newMinutes)
    }
  }

  const getSeconds = () => {
    const newSeconds = Math.floor((time / 1000) % 60)
    if (seconds !== newSeconds) {
      setAnimateSeconds(true)
      setTimeout(() => setAnimateSeconds(false), animationDuration)
      setSeconds(newSeconds)
    }
  }

  const runTimer = () => {
    getDays()
    gethours()
    getMinutes()
    getSeconds()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      runTimer()
    }, 600);
    return () => clearInterval(interval);
  });



  const display = times[variant]
  const animationRunning = animations[variant]
  const top = animationRunning ? first : 'hidden'
  const bottom = animationRunning ? second : ''

  return { top, bottom, display }

};

export default useAnimation;