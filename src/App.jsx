import { useState } from 'react'
import './App.css'
import Banner from './component/banner'
import Footer from './component/footer'
import Navbar from './component/navbar'
import Products from './component/products'
import ShowMessage from './component/showMassage'
import {FaHeart,FaRegHeart } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// import { addMessageId } from '../public/localSt'


function App() {
  const [amount, setAmount] = useState(0);
  const [messages, setMessages] = useState([]);
  // let handelDisable = (product) => {
  //   console.log(product.title);
  // }

  let handelMassage = (product) => {
    // setAmount(amount+product.currentBidPrice);
    // let newMessages = [...messages,product];
    // setMessages(newMessages);
    setMessages(prevMessages => {
      const existedMessage = prevMessages.some(
        message => message.id ===product.id
      ); // if both id matched it will return true, then _ existedMessage = true; 
      if(existedMessage) {
        return prevMessages
      }
      toast.success(`Added to Favourites`,<FaHeart className='mx-auto text-red-500' size={20}/>);
      return [...prevMessages, product]
    }
      
   );
    setAmount(preAmount=> {
      const existedAmount = messages.some(
        mess => mess.id === product.id
      );
      if (existedAmount) {
        return preAmount
      }

     return preAmount + product.currentBidPrice;

    }
    )

    // addMessageId(product.id);
    // handelDisable(product);
  }
  let handelRemoveMessage = (message) => {
    // console.log("clicked",message.title)
    // setMessages(messages.filter(mess => mess.id !== message.id ))
    // setAmount(amount-message.currentBidPrice)
    setMessages(prev => 
      prev.filter(mess => mess.id !== message.id)
    )
    setAmount(prev=>
      prev - message.currentBidPrice
    );
  };
  // console.log(remove)
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <div className='mt-20'>
      <h1 className='text-4xl font-semibold px-2 md:px-6 lg:px-12'>Active Auctions</h1>
      <p className='text-lg font-medium mt-2 mb-12 px-2 md:px-6 lg:px-12'>Discover and bid on extraordinary items</p>
      <div className='parent-container py-20 px-2 md:px-6 lg:px-12 bg-gray-200 flex flex-col md:flex-row gap-5 '>
        <div className="left-container bg-white w-full md:w-[70%] rounded-xl pt-3">
          <table className='w-full'>
            <thead>
              <tr>
              <th>Items</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
            </thead>
           <tbody>
            <Products handelMassage={handelMassage}
            messages={messages}
             ></Products>
           </tbody>
          </table>
        </div>
        <div className="right-container bg-white w-full md:w-[30%] rounded-xl py-3">
          <ToastContainer position="top-right" autoClose={2000} />
          <h1 className='text-3xl font-semibold text-center mt-3 py-4 border-b-2 border-gray-200 text-blue-400'><FaRegHeart className='mx-auto inline ' size={20}/> Favourite Items {messages.length}</h1>
          <div className="massage-container">
           {
            messages.length? messages.map(message => <ShowMessage handelRemoveMessage={handelRemoveMessage} key={message.id} message={message}></ShowMessage>):
            <div className='massage'>
              <h1 className='text-2xl font-semibold text-center mt-5'>No Favourite Yet</h1>
              <p className='text-lg font-medium text-gray-400 text-center mt-3'>Click the heart icon on any item to add it to your favorites</p>
            </div>
           }
          </div>
          <div className='mt-5 py-4 border-t-2 border-gray-200 flex justify-between'>
            <p className='pl-2 text-lg font-semibold '>Total bids Amount</p>
            <p className='text-lg font-semibold pr-6'>${amount}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
