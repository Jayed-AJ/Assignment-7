import React, { useEffect, useState } from 'react';
import Product from './product';

const Products = ({handelMassage,messages}) => {
    const [products,setProducts] = useState([]);
        useEffect(()=>{
       fetch("data.json")
       .then(res => res.json())
       .then(data => setProducts(data));
    },[]);
    return (
        <>
            {
            products.map(product => <Product
                key={product.id}
                product={product}
                handelMassage={handelMassage}
                messages={messages}
                ></Product>)
            }
        </>
    );
};

export default Products;