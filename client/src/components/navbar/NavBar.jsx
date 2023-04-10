import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './NavBar.scss';
import newRequest from '../../utils/newRequest';

const NavBar = () => {

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // To check the scroll is active / not 
  const isScrollActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    // Add event listener to scroll 
    window.addEventListener('scroll', isScrollActive)

    // Clean Up Function To remove listener
    return () => {
      window.removeEventListener('scroll', isScrollActive)
    }

  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const handleLogOut = async () => {
    try {
      await newRequest.post("/auth/logout");

      localStorage.setItem("currentUser", null);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <Link to='/' className='link'>
            <span className='text'>fiverr</span>
            <span className='dot'>.</span>
          </Link>
        </div>

        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src={currentUser?.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Y2JySpebTDjCmOQN2AIEJrFeXPv1ykikIg&usqp=CAU"}
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" onClick={handleLogOut}>
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <Link to='/login' className='link'>Sign In</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>

      </div>

      {
        (active || pathname !== '/') && (
          <>
            <hr />
            <div className="menu">
              <Link className="link menuLink" to="/">
                Graphics & Design
              </Link>
              <Link className="link menuLink" to="/">
                Video & Animation
              </Link>
              <Link className="link menuLink" to="/">
                Writing & Translation
              </Link>
              <Link className="link menuLink" to="/">
                AI Services
              </Link>
              <Link className="link menuLink" to="/">
                Digital Marketing
              </Link>
              <Link className="link menuLink" to="/">
                Music & Audio
              </Link>
              <Link className="link menuLink" to="/">
                Programming & Tech
              </Link>
              <Link className="link menuLink" to="/">
                Business
              </Link>
              <Link className="link menuLink" to="/">
                Lifestyle
              </Link>
            </div>
            <hr />
          </>
        )}

    </div>
  )
}

export default NavBar