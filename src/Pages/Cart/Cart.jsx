import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import NumberFormat from 'react-number-format';
import { CartContext } from '../../Context/CartContext';
import { CartContainer, CardContainer, ImgContainer, ImgProduct, DetailsContainer, TitleProduct, PriceProduct, QuantityProduct, OptionsContainer, OptionButton } from './CartCss';


const Cart = () => {

    const { CartList, CartSize, removeItem } = useContext(CartContext);
    const navigate = useNavigate();

    const onHandleRemove = (id) => {
        removeItem(id);
    }

    const onHandleReturn = (e) => {
        e.preventDefault();


        navigate('/');
    }
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
                                <OptionsContainer>
                                    <OptionButton onClick={() => onHandleRemove(item.id)}>
                                        Remove
                                    </OptionButton>
                                </OptionsContainer>
                            </CardContainer>);
                    }) :
                    <>
                        <h2>Empty cart</h2>
                        <OptionButton onClick={onHandleReturn}>
                            Return to main
                        </OptionButton>
                    </>
            }
        </CartContainer >
    );
}

export default Cart