import React, { useEffect } from 'react'
import '../App.scss'
import gsap from 'gsap'

const Hero = () => {
  // 
  useEffect(() => {

    const tl1 = gsap.timeline()

    tl1.to('.left>h1',{ y: 0, duration: .8, delay: 1})
    tl1.to('.circle',{ scale: 1, duration: .4})
    tl1.to('.title_wrapper',{ marginTop: '47%', duration: .9, delay: 1},'b')
    tl1.to('.right ul li h2',{marginTop: 0, duration: 1},'b')

    const tl = gsap.timeline({repeat: -1});

    tl.to('.title_wrapper',{ y: '-25%', delay: 2.5})
    tl.to('.title_wrapper',{ y: '-50%', delay: 2.5})
    tl.to('.title_wrapper',{ y: '-75%', delay: 2.5}, 'a')
    tl.to('.last_one',{ y: '-1%', delay: 1}, 'a')

  }, []);

  return (
    <div id='hero'>
      <div className="left">
        <h1>Creative design</h1>

        <div className="circle_animation">

          <div className="circle_wrapper">
            <div className="circle"></div>
          </div>
          <div className='title_wrapper'>
            <h1 className='f'>pros</h1> 
            <h1 className='s'>studio</h1>
             <h1 clas>team</h1>
            <h1 className='last_one'>pros</h1>
          </div>
        </div>

      </div>

      <div className="right">
        <p>- Since 2007</p><br />
        <ul>
          <li><h2>Graphic Design</h2></li>
          <li><h2>Art Direction</h2></li>
          <li><h2>Visual Identity</h2></li>
          <li><h2>Digital Design</h2></li>
          <li><h2>Brand Strategy</h2></li>
          <li><h2>& more</h2></li>
        </ul>
      </div>
    </div>
  )
}

export default Hero