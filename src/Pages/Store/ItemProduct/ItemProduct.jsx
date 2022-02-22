import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../../../Components/ItemCount/ItemCount';
import {
    ItemProductDiv,
    Img,
    NameDescription
} from './ItemProductCss';

const ItemProduct = ({ item, itemStore }) => {

    return (
        <>
            <ItemProductDiv>
                <Link to={`../item/${item.id}`}>
                    <Img src={item.img.src} alt={item.img.alt} />
                </Link>
                <NameDescription>
                    {item.name}
                </NameDescription>
                <ItemCount itemStore={itemStore} />
            </ItemProductDiv>
        </>
    )
}

export default ItemProduct;