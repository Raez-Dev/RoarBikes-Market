import React from 'react'
import './Navbar.css';

import UserWidget from '../UserWidget';
import CartWidget from '../CartWidget';


const index = ({itemcount}) => {
    return (
        <>
            <nav className="navbar">
                <div className="container">

                    <div className='navbar-brand-list'>

                        <h1 className="navbar-brand">
                            <b>ROAR</b>BIKES
                        </h1>
                        <ul className="navbar-list">
                            <li className="navbar-list-item list">
                                <a href="/#">Home</a>
                            </li>
                            <li className="navbar-list-item list">
                                <a href="/#">Products</a>
                            </li>
                            <li className="navbar-list-item list">
                                <a href="/#">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <ul className="navbar-list">
                        <li className="navbar-list-item options">
                            <CartWidget itemcount={itemcount} />
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

export default index
