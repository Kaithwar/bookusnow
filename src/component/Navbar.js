import React from 'react'
import "./nav.css"
const Navbar = () => {

    return (
        <div>
            <nav className="navbar bg-body-tertiary" style={{"backgroundColor":"#ffff"}}>
                <div className="container-fluid">
                    <a className="navbar-brand logo">BookUsNow</a>
                    <form className="d-flex" role="search">
                    <div className="d-flex px-3 py-2 mx-3 cat">
                        <img src="menu.png" alt="" />
                        <p>Categories</p>
                    </div>
                        <input className="form-control me-2 search-bar" type="search" placeholder="D JI phantom" aria-label="Search"/>
                        <img src="lens.png" className="my-2" style={{"height":"26px"}} alt="" />
                    </form>
                    <div className="btn like-btn">
                        <button className='nbt'>
                            <img src="heart.png" className="mx-2"alt="" />Favourites</button>
                        <button className='nbt' >SignIn</button>
                    </div>
                    <div className="btn user-btn">
                            <img src="heart.png" className="mx-2 p-1"alt="" />
                            <img src="user.png" className="mx-2 p-1"alt="" />
                        
                    </div>
                </div>
                <div className='nav2 mx-3 d-flex'>
                    <div className='d-flex  mx-3 loc'>
                        <img src="maps-and-flags.png" className="mx-2" style={{"height":"24px"}} alt="" />
                        <p>Mumbai, India</p>
                        <img src="right-arrow.png" className="mx-2 my-2" style={{"height":"10px"}} alt="" />
                    </div>
                    <div className="items">
                        <a href="">Live shows</a>
                        <a href="">Streams</a>
                        <a href="">Movies</a>
                        <a href="">Plays</a>
                        <a href="">Events</a>
                        <a href="">Sports</a>
                        <a href="">Activities</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar