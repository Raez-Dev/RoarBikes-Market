import React, { useState, useEffect } from 'react'
import {
    AddCartButton,
    ItemCountDivQ,
    QuantityDiv,
    ButtonLess,
    ButtonPlus
} from './ItemCountCss';

const Index = ({ itemStore = { initial: 0, stock: 0 } }) => {

    const [quantity, setQuantity] = useState(0)
    const [EnablePlus, setEnablePlus] = useState(false)
    const [EnableLess, setEnableLess] = useState(false)
    const [EnableAddCart, setEnableAddCart] = useState(false)

    useEffect(() => {

        setQuantity(itemStore.initial)

        if (quantity <= 1) {
            setEnableLess(true);
        }
        if (quantity === itemStore.stock) {
            setEnablePlus(true);
        }
        if (itemStore.stock === 0) {
            setEnableAddCart(true);
        }
    }, [])


    const onQuantityChange = (e) => {
        e.preventDefault();
        let buttonType = e.target.name;
        if (buttonType.includes('plus')) {
            if (itemStore.stock >= quantity + 1) {
                setQuantity(quantity + 1)
                if ((quantity + 1) === itemStore.stock) {
                    setEnablePlus(true);
                    setEnableLess(false);
                }
                else {
                    setEnableLess(false);
                }
            } else {
                setEnablePlus(false);
            }
        }
        else {
            if (quantity !== 1) {
                setQuantity(quantity - 1)
                if ((quantity - 1) === 1) {
                    setEnableLess(true);
                    setEnablePlus(false);
                }
                else {
                    setEnablePlus(false);
                }
            } else {
                setEnableLess(false);
            }
        }
    }

    // const onHandleAddCart = () => {
    //     //onAddStore(quantity);
    // }

    return (
        <>
            <ItemCountDivQ >
                <ButtonLess onClick={onQuantityChange}
                    disabled={EnableLess}
                >-</ButtonLess>
                <QuantityDiv >{quantity}</QuantityDiv>
                <ButtonPlus onClick={onQuantityChange}
                    disabled={EnablePlus}
                >+</ButtonPlus>
            </ItemCountDivQ>
            <AddCartButton disabled={EnableAddCart}>ADD TO CART</AddCartButton>
        </>
    )
}

export default Index;
