import React from 'react';
import bannerImg from '../assets/imges/Banner-min.jpg';
const Banner = () => {
    return (
        <div>
            <div
            className="hero h-[500px] "
            style={{
                backgroundImage:
                `url(${bannerImg})`,
            }}
            >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content  w-full flex justify-start">
                <div className="max-w-md ">
                <h1 className="mb-5 text-4xl lg:text-5xl font-bold">Bid on Unique Items from Around the World</h1>
                <p className="mb-5">Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions </p>
                <button className="btn bg-gray-50 rounded-3xl font-medium">Explore Auctions</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;