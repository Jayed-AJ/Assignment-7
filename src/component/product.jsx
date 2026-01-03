import { FaHeart,FaRegHeart } from "react-icons/fa";
const Product = ({product,handelMassage,messages}) => {
    // console.log(messages);
    // console.log(product);
    const isLiked = messages.some(
        message => message.id === product.id
    )
    return (
        <tr>
            <td><img className='h-12 w-12 lg:h-20 lg:w-24 mx-auto rounded-md' src={product.image} alt="image" /></td>
            <td>${product.currentBidPrice}</td>
            <td>{product.timeLeft}</td>
            <td><button 
            onClick={()=>
            {handelMassage(product)
            }} 
            >
                {
                    isLiked? (
                     <FaHeart className='mx-auto text-red-500' size={20}/>
                    ):
                    (
                     <FaRegHeart className='mx-auto ' size={20}/>
                    )
                }
            </button></td>
        </tr>
    );
};

export default Product;