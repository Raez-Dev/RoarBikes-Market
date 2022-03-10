import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

import UserWidget from '../UserWidget';
import CartWidget from '../CartWidget';
import { CartContext } from '../../Context/CartContext';


const Navbar = () => {
    const { CartList, CartSize } = useContext(CartContext);

    return (
        <>
            <nav className="navbar">
                <div className="container">

                    <div className='navbar-brand-list'>

                        <h1 className="navbar-brand">
                            <NavLink to={`/`}>
                                <b>ROAR</b>BIKES
                            </NavLink>
                        </h1>
                        <ul className="navbar-list">
                            <li className="navbar-list-item list">
                                <NavLink to={`category/1`}>
                                    Caliber
                                </NavLink>
                            </li>
                            <li className="navbar-list-item list">
                                <NavLink to={`category/2`}>
                                    Top Fuel
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <ul className="navbar-list">
                        <li className="navbar-list-item options">
                            <NavLink to={`cart`}>                                
                                <CartWidget itemcount={CartSize > 0 ? CartList.map((item, index) => {
                                    return item.quantity;
                                }).reduce((total, qty) => total + qty) : 0} />
                            </NavLink>
                        </li>
                        <li className="navbar-list-item options">
                            <UserWidget />
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar
