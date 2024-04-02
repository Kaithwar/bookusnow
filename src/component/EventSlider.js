import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgdata from "../image.json"


function EventSlider() {
    // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the number of slides for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
    const [events, setEvents] = useState([]);

    const fetchData = async () => {
        try {
          const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();

          const eventsWithImages = data.events.map((event, index) => ({
            ...event,
            imgUrl: imgdata.data[index]?.link || 'gallery/Rectangle1.svg'
        }));

          console.log(eventsWithImages);
          setEvents(eventsWithImages);
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className='mx-4 px-4 event-slider'>
        <Slider {...settings}>
        {events.map((element) => {
            const date = new Date(element.date);
            const formattedDate = date.toISOString().split('T')[0];
            const date1 = new Date(formattedDate);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const newdate = date1.toLocaleString('en-US', options);

            const distanceStr = element.distanceKm.toString(); // Convert to string
            const km = distanceStr.substring(0, 2);     

                return <div className="event-card" key={element.eventName}>
                <img src={element.imgUrl} alt="" style={{"width":"260px"}} />
                <div className="title d-flex mx-2">
                    <p className='head'>{element.eventName}</p>
                    <p className='para'>{newdate}</p>
                    
                </div>
                <div className="location d-flex mx-2">
                    <div className='d-flex'>
                        <img src="maps-and-flags.png" alt="" style={{"width":"19px"}} />
                        <p className='para'>{element.cityName}</p>
                    </div>
                    <p className='para'>{element.weather} | {km}km</p>
                </div>
            </div>
              })}
              </Slider>  
    </div>
  )
}

export default EventSlider