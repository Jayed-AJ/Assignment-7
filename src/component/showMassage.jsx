import React, { } from 'react';

const ShowMessage = ({message,handelRemoveMessage}) => {
    return (
        <div className='m-4 p-3 rounded-md shadow flex justify-between items-center'>
            <img className='w-10 h-10' src={message.image} alt="imgage"/>
            <div className='w-full text-center'>
                <p className='font-semibold'>{message.title}</p>
                <p className='space-x-2 font-medium'><span>${message.currentBidPrice}</span><span>Bids:{message.bidsCount}</span></p>
            </div>
            <button onClick={()=>handelRemoveMessage(message)} className='btn btn-sm mb-6 text-sm font-light'>X</button>
        </div>
    );
};

export default ShowMessage;