import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import ShowItem from './ShowItem';
import Spinner from './Spinner';
import imgdata from "./Show.json"

function Show() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalEvents, setTotalEvents] = useState(0)

  const fetchData = async () => {
    try {
      const url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`;
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
      const eventsWithImages = data.events.map((event, index) => ({
        ...event,
        imgUrl: imgdata.data[index]?.link || 'gallery/Rectangle1.svg'
    }));

      setEvents(eventsWithImages);
      setTotalPages(data.totalPages)
      setTotalEvents(data.totalEvents)
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page + 1}&type=upcoming`;
    setPage(page + 1)
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(data);
    const eventsWithImages = data.events.map((event, index) => ({
      ...event,
      imgUrl: imgdata.data[index]?.link || 'gallery/Rectangle1.svg'
  }));

    setEvents(prevEvents => [...prevEvents, ...eventsWithImages]);
    setTotalPages(data.totalPages)
    setTotalEvents(data.totalEvents)
    setLoading(false);
  };
  console.log("length of events1: "+ events.length);
  console.log("Total Events: "+ totalEvents);

  return (
    <div>
      <div className="d-flex">
        <h3 className='mr'>Upcoming Events</h3>
        <img src="black.png" alt="" />
      </div>
      <InfiniteScroll
        dataLength={events.length}
        next={fetchMoreData}
        hasMore={page !== totalPages}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {events.map((element) => {
              const date = new Date(element.date);
              const formattedDate = date.toISOString().split('T')[0];
              const date1 = new Date(formattedDate);
              const options = { year: 'numeric', month: 'long', day: 'numeric' };
              const newdate = date1.toLocaleString('en-US', options);

              const distanceStr = element.distanceKm.toString(); // Convert to string
              const km = distanceStr.substring(0, 2);  
              return <div className="col-md-4" key={element.eventName}>
                <ShowItem
                  eventName={element.eventName}
                  cityName={element.cityName}
                  imageurl={element.imgUrl}
                  weather={element.weather}
                  distance={km}
                  date={newdate}
                />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Show