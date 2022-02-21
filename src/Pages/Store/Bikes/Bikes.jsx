import React, { useEffect, useState } from 'react'
import SideFilter from '../SideFilter/SideFilter';
import ListProduct from '../ListProduct/ListProduct';
import { BikesDiv } from './BikesCss';
import { getProductList } from '../../../Services/Product/ProductAPI';

const Bikes = () => {

  const [ProductList, setProductList] = useState([]);

  useEffect(() => {
    getProductList
    .then((response) => {
      setProductList(response);
    });
  }, [])

  return (
    <BikesDiv>
      <SideFilter />
      <ListProduct ProductList={ProductList} />
    </BikesDiv>
  )
}

export default Bikes;