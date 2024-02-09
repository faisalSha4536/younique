import React, { useEffect, useRef } from 'react'
import '../App.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Video = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: video,
        start: '0% 70%',
        end: '100% 70%',
        onEnter: () => {
          if (video) {
            video.play();
          }
        }
      },
    });

    return () => {
      if (video) {
        video.pause();
      }
    };
  }, []);
  return (
    <div id='video'>
      <video ref={videoRef} autoPlay loop muted><source src='./video.mp4' type='video/mp4'/> Your browser does not support the video tag.</video>
    </div>
  )
}

export default Video