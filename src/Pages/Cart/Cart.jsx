import React, { useContext,  useState } from 'react'
import { useNavigate } from "react-router-dom";
import NumberFormat from 'react-number-format';
import { CartContext } from '../../Context/CartContext';
import {
    CartContainer,
    CardContainer,
    ImgContainer,
    ImgProduct,
    DetailsContainer,
    TitleProduct,
    PriceProduct,
    QuantityProduct,
    OptionsContainer,
    OptionButton,
    FormContainer,
    InputForm,
    FormButton
} from './CartCss';
import { setCart } from '../../Services/Cart/CartAPI';



const Cart = () => {

    const { CartList, CartSize, removeItem } = useContext(CartContext);
    const navigate = useNavigate();

    const [enableBtn, setEnableBtn] = useState(false)
    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: ''
    });


    const onHandleRemove = (id) => {
        removeItem(id);
    }

    const onHandleReturn = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const onHandleChange = (e) => {
        e.preventDefault();
        const newBuyer = { ...buyer, [e.target.name]: e.target.value }
        setBuyer(newBuyer);

        let cantFull = Object.keys(newBuyer).map(key => {
            return newBuyer[key] !== "" ? 1 : 0
        }).reduce((a, b) => a + b);

        cantFull === 3 ? setEnableBtn(true) : setEnableBtn(false);
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault();

        let order = {
            buyer: buyer,
            items: [...CartList
                .map((item) => {
                    return { id: item.idProduct, title: item.name, price: parseFloat(item.price) };
                })],
            total: CartList.map((item) => { return parseFloat(item.price) * parseFloat(item.quantity) }).reduce((a, b) => a + b)
        }

        let orderCode = await setCart(order);
        alert(orderCode);

    }

    return (
        <>
            {
                CartSize != 0 ?
                    <CartContainer>
                        <FormContainer onSubmit={onHandleSubmit}>
                            <InputForm type="text" name="name" id="name" placeholder='Name' value={buyer.name} onChange={onHandleChange} />
                            <InputForm type="text" name="phone" id="phone" placeholder='Phone' value={buyer.phone} onChange={onHandleChange} />
                            <InputForm type="text" name="email" id="email" placeholder='Email' value={buyer.email} onChange={onHandleChange} />
                            <FormButton disabled={!enableBtn}>
                                Buy
                            </FormButton>
                        </FormContainer>
                        {
                            CartList.map((item, index) => {
                                return (
                                    <CardContainer key={index}>
                                        <ImgContainer>
                                            <ImgProduct src={item.imgVariants[0].img.src} alt={item.imgVariants[0].img.alt} />
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
                            })
                        }
                    </CartContainer >
                    :
                    <>
                        <h2>Empty cart</h2>
                        <OptionButton onClick={onHandleReturn}>
                            Return to main
                        </OptionButton>

                    </>
            }
        </>
    );
}
export default Cart;