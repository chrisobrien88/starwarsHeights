import React from 'react'
import airbnbLogo from '../images/airbnb-logo.png'
import experiencesImg from '../images/photo-grid.png'

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <img src={airbnbLogo} alt="airbnb Logo" className='navbar--logo'/>
        </div>
        <section className='hero'>
            <img 
                className='hero--img' 
                src={experiencesImg} 
                alt='images of people enjoying experiences'/>
            <content>
                <h1 className='hero--title'>Online Experiences</h1>
                <h4 className='hero--subtitle'>Join unique interactive activities led by 
                    one-of-a-kind hosts—all 
                    without leaving home.
                </h4>
            </content>
        </section>
    </>
  )
}

export default Navbar