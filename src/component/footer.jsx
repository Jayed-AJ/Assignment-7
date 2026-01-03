import React from 'react';

const Footer = () => {
    return (
        <div className='text-center mt-4 py-24'>
            <h1 className="font-semibold text-2xl">Action <span className='text-yellow-300 font-black'>Gallery</span></h1>
            <p className='mt-3 text-lg'>Bid. Win. Own.</p>
            <div className='mt-2 font-semibold flex justify-center gap-7'>
                <p>Home</p>
                <p>Auction</p>
                <p>Caregories</p>
                <p>How to Work</p>
            </div>
            <p className='text-gray-400 font-medium mt-6'>© 2025AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;