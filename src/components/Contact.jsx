import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: '#contact',
        start: '0% 80%',
        end: '100% 50%',
      }
    })

    tl.to('.title .first p',{
      marginTop: 0,
      stagger: .1
    },'a')

    tl.to('.title .second p',{
      marginTop: 0,
      stagger: .1
    },'a')

    tl.to('.title>p',{
      marginTop: '3%',
    }, 'a')

    tl.to('.p p',{
      marginTop: 0,
      stagger: .1
    },'b')

    tl.to('.p2 p',{
      marginTop: 0,
      stagger: .1
    },'b')


  },[])
  return (
    <div id='contact'>
      <div className="top">
        <div className="title">
          <div className="first">
          <p><span>L</span></p>
          <p><span>e</span></p>
          <p><span>t</span></p>
          <p><span>'s</span></p> 
          </div>
          <div className="second">
          <p><span>c</span></p>
          <p><span>o</span></p>
          <p><span>L</span></p>
          <p><span>a</span></p>
          <p><span>b</span></p>
          <p><span>r</span></p>
          <p><span>a</span></p>
          <p><span>t</span></p>
          <p><span>e</span></p>
          </div>
          <p><FaArrowRight/></p>
        </div>
        <div className="socials">
        <div className="left">
          <div className='p'><p id='one'>S</p>
          <p id='three'>O</p>
          <p id='four'>C</p>
          <p id='five'>I</p>
          <p id='five'>A</p>
          <p id='five'>L</p>
          <p id='five'>S</p></div><br />
          <div className="p2"><p>behance <span><FaArrowRight/></span></p></div>
          <div className="p2"><p>linkedin <span><FaArrowRight/></span></p></div>
        </div>
        <div className="center">
        <p></p><br />
          <div className="p2"><p>dribble <span><FaArrowRight/></span></p></div>
          <div className="p2"><p>facebook <span><FaArrowRight/></span></p></div>
        </div>
        <div className="right">
        <p></p><br />
        <div className="p2"><p>awwards <span><FaArrowRight/></span></p></div>
          <div className="p2"><p>instagram <span><FaArrowRight/></span></p></div>
        </div>
        </div>
      </div>
      <div className="bottom">
        <h1>younique <span>TM</span></h1>
        
      </div>
    </div>
  )
}

export default Contact