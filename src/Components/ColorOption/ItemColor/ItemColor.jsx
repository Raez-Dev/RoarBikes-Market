import React from 'react'
import { Color } from './ItemColorCss';

const ItemColor = ({ item, onColorChange }) => {

    const onClickChange = (item) => {
        onColorChange(item);
    }

    return (
        <Color item={item} onClick={() => onClickChange(item)} />
    )
}

export default ItemColor