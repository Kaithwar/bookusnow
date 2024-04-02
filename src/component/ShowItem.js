import React from 'react'

function ShowItem(props) {
    let { eventName, cityName, imageurl, weather, distance, date } = props;
    return (
        <div className="my-3">
            <div className="card">
                <img src={imageurl} className="card-img-top c-img " alt="..." />
                <p className='c-bot'>{date}</p>
                <div className="card-body">
                    <h5 className="card-title">{eventName}</h5>
                    <div className="location d-flex mx-2">
                        <div className='d-flex'>
                            <img src="maps-and-flags.png" alt="" style={{ "width": "19px" }} />
                            <p className='card-text'>{cityName}</p>
                        </div>
                        <p className='card-text'>{weather} | {distance}km</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowItem