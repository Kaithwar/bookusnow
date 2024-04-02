import React from 'react'
import "./nav.css"
import EventSlider from './EventSlider'

function Home() {
  return (
    <div>
        <div className="home">
            <h1>Discover Exciting Events Happening Near You - Stay Tuned for Updates!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, ipsum nec tincidunt elementum, turpis odio eleifend ligula, </p>
        </div>
        <div className="slider">
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <h3 className='mx-3 slider-head'>Recommended shows</h3>
                    <img src="arrow.png" alt="" />
                </div>
                <a href="">see all</a>
            </div>
            
            <EventSlider/>
        </div>
        
    </div>
  )
}

export default Home