import React
    // , { useEffect, useState } 
    from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ListRoutes } from './RoutesAPI';
import Layout from '../Layouts/Layout';
import Store from '../Pages/Store/Store';
import Bikes from '../Pages/Store/Bikes/Bikes';
import ProductDetail from '../Pages/Store/ProductDetail/ProductDetail';
import Cart from '../Pages/Cart/Cart';

const Index = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/"} element={<Store />}>
                        <Route path={"/"} element={<Bikes />} />
                        <Route path={"category/:id"} element={<Bikes />} />
                        <Route path={"item/:id"} element={<ProductDetail />} />
                    </Route>
                    <Route path={"/cart"} element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index