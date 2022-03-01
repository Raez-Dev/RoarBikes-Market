import React, { useContext } from 'react'
import NumberFormat from 'react-number-format';
import { CartContext } from '../../Context/CartContext';
import { CartContainer, CardContainer, ImgContainer, ImgProduct, DetailsContainer, TitleProduct, PriceProduct, QuantityProduct } from './CartCss';


const Cart = () => {

    const { CartList, CartSize } = useContext(CartContext);

    return (
        <CartContainer>
            {
                CartSize != 0 ?
                    CartList.map((item, index) => {
                        return (
                            <CardContainer key={index}>
                                <ImgContainer>
                                    <ImgProduct src={item.img.src} alt={item.img.alt} />
                                </ImgContainer>
                                <DetailsContainer>
                                    <TitleProduct>{item.name}</TitleProduct>
                                    <PriceProduct><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'€'} /></PriceProduct>
                                    <QuantityProduct>{item.quantity}</QuantityProduct>
                                </DetailsContainer>
                            </CardContainer>);
                    }) : <h2>Empty cart</h2>
            }
        </CartContainer >
    );
}

export default Cart