import React, { useState, createContext } from 'react'

export const CartContext = createContext()

const CartProvider = ({ defaultValue = [], children }) => {

    const [CartList, setCartList] = useState(defaultValue);

    const addItem = (item) => {
        if (CartList.length === 0) {

            let product = { ...item, "id": 1 };
            setCartList([...CartList, product]);
            return { IsSuccess: true, data: product };

        } else {

            let ids = CartList.map((item) => item.id)
            let newId = Math.max(...ids) + 1;
            setCartList([...CartList, { ...item, "id": newId }]);
            return { IsSuccess: true, data: { ...item, "id": newId } };

        }
    }
    const removeItem = (itemId) => {
        const product = CartList.find((item) => item.id === itemId);
        if (product) {
            setCartList([...CartList.filter((item) => item.id !== itemId)]);
            return { IsSuccess: true, msg: 'Deleted item' };
        } else {
            return { IsSuccess: false, msg: "Not found" };
        }
    }
    const clear = () => {
        setCartList(defaultValue);
    }
    const isInCart = (itemId) => {
        const product = CartList.find((item) => item.idProduct === itemId);
        if (product) {
            return { IsSuccess: true, data: true };
        } else {
            return { IsSuccess: false, msg: "Not found" };
        }
    }

    return (
        <CartContext.Provider value={{ CartList, CartSize: CartList.length, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider >
    )
}

export default CartProvider;