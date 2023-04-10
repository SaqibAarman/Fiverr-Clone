import React from 'react'
import './Featured.scss'

const Featured = () => {
    return (
        <div className='featured'>
            <div className="container">
                <div className="left">
                    <h1>
                        Find the perfect <i>freelance</i> services for your business
                    </h1>

                    <div className="search">
                        <div className="searchInput">
                            <img src="./images/search.png" alt="search" />
                            <input type="text" placeholder='Try "Building Mobile App"' />
                        </div>
                        <button>Search</button>
                    </div>

                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>WordPress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>

                </div>
                <div className="right">
                    <img src="./images/man.png" alt="Man" />
                </div>

            </div>
        </div>
    )
}

export default Featured