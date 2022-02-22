import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import SideFilter from '../SideFilter/SideFilter';
import ListProduct from '../ListProduct/ListProduct';
import { BikesDiv } from './BikesCss';
import { getProductList, getProductListByCategory } from '../../../Services/Product/ProductAPI';

const Bikes = () => {

  const [ProductList, setProductList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductListByCategory(id)
        .then((response) => {
          setProductList(response);
        });
    } else {
      getProductList()
        .then((response) => {
          setProductList(response);
        });
    }
  }, [])

  useEffect(() => {
    if (id) {
      getProductListByCategory(id)
        .then((response) => {
          setProductList(response);
        });
    } else {
      getProductList()
        .then((response) => {
          setProductList(response);
        });
    }
  }, [id])

  return (
    <BikesDiv>
      <SideFilter />
      <ListProduct ProductList={ProductList} />
    </BikesDiv>
  )
}

export default Bikes;