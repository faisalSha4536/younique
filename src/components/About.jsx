import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: '#about',
        start: '0% 80%',
        end: '100% 50%',
      }
    })

    tl.to('.text h4',{
      marginTop: 0,
      stagger: .1
    })


  },[])

  return (
    <div id='about'>
      <div className="center">
      <div className="left">
        <div className="text">
        <h4 id='one'>A</h4>
        <h4 id='two'>B</h4>
        <h4 id='three'>O</h4>
        <h4 id='four'>U</h4>
        <h4 id='five'>T</h4>
        </div>
      </div>
      <div className="right">
        <div className="text">
          <p><span>hello, we are younique</span><br />stdio. we are here to craete unique brands and help them to stand out. we unity stratgey, design & creative soulation to make it happens.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About