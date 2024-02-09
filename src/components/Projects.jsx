import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  const [selectProjects, setSelecteProjects] = useState(null)
  const [cursorPosition, setCursorPosition] = useState(0)
  const [imgPosition, setImgPosition] = useState(0)
  const [width, setWidth] = useState({width: '300px'})
  const imageRef = useRef([]);
  const projects = [
    {
      name: 'Molecules For Peace',
      img: '/1.jpg'
    },
    {
      name: 'Men Rock',
      img: '/2.jpg'
    },
    {
      name: 'REPLICANT',
      img: '/3.gif'
    },
    {
      name: 'MARKETMOVE',
      img: '/4.gif'
    },
    {
      name: "CAPE KAVLS'21",
      img: '/5.png'
    },
    {
      name: 'INBEAUTY',
      img: '/6.png'
    },
    {
      name: 'FLANCO',
      img: '/7.jpg'
    },
    {
      name: 'LOGS & MARKS',
      img: '/8.gif'
    },
  ]

  const moveHandler = (e, index)=>{
    if(index === selectProjects){
      setCursorPosition(e.clientX)
      const imageWidth = parseFloat(width.width);
      setImgPosition(`${cursorPosition - imageWidth / 2}`)
  }
  }
 
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects',
        start: '0% 70%',
        end: '100% 50%',
        // markers: true
      }
    })

    tl.to('.text1 h4', {
      marginTop: 0,
      stagger: .1
    } ,'a')

    tl.to('.border',{
      width: '100%',
      duration: 2,
      stagger: .3
    }, 'a')

  

  }, [])

  return (
    <div id='projects'>
      <div className="top">
        <div className="text1">
          <h4 id='one'>S</h4>
          <h4 id='two'>P</h4>
          <h4 id='three'>O</h4>
          <h4 id='four'>T</h4>
          <h4 id='five'>L</h4>
          <h4 id='five'>I</h4>
          <h4 id='five'>G</h4>
          <h4 id='five'>T</h4>
        </div>
      </div>
      <div className="bottom">

        {
          projects.map((project, index) => {

            return (<div className="project">
              <div className="border-lite"></div>
              <div className="border"></div>
              <div onMouseMove={(e)=>{moveHandler(e, index)}} key={index} onMouseOver={() => setSelecteProjects(index)} onMouseLeave={() => { setSelecteProjects(null) }} className="project-body">
                <p className='title'>{project.name}</p>
                <p className='icon'><FaArrowRight /></p>
                <img ref={imageRef} className={selectProjects == index ? 'show' : 'hide'} style={{transform : `translateX(${imgPosition}px)`}} src={project.img} alt="" />
              </div>
              
            </div>)

          })
        }


      </div>
    </div>
  )
}

export default Projects


