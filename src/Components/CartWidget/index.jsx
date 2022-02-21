import './CartWidget.css';

import React from 'react'
import iconCart from '../../Assets/img/Navbar/icon-cart.png';

const index = ({ itemcount = 0 }) => {
    return (

        <div className='cartwidget'>
            <button className='cartwidget-button' >
                <img alt='Icon cart' src={iconCart} />
            </button>
            {itemcount !== 0 ? <div className='cartwidget-itemcount'>  <p >{itemcount}</p></div> : <></>}
        </div>

    )
}

export default index
