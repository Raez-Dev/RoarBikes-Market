import React, { useState, useEffect } from 'react'
//import Bikes from './Bikes/Bikes';
import ProductDetail from './ProductDetail/ProductDetail';
import { getProduct } from '../../Services/Product/ProductAPI';

const Store = () => {

    const [Product, setProduct] = useState()

    useEffect(() => {
        getProduct.then((product) => {
            setProduct(product);
        });
    }, [])


    return (
        <>
            {/* <Bikes />  */}
            {Product  ? <ProductDetail product={Product} /> : <></>}
        </>
    )
}

export default Store