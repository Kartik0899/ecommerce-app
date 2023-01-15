import React from 'react'
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-happy-shopping-light-spot-poster-background-image_122448.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home;