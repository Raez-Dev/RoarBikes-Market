import React from 'react'
import ItemCount from '../../../Components/ItemCount/ItemCount';
import {
    ItemProductDiv,
    Img,
    NameDescription
} from './ItemProductCss';

const ItemProduct = ({ name,img, itemStore}) => {

    return (
        <>
            <ItemProductDiv>
                <Img src={img.src} alt={img.alt}>
                </Img>
                <NameDescription>
                    {name}
                </NameDescription>
                <ItemCount itemStore={itemStore}/>
            </ItemProductDiv>
        </>
    )
}

export default ItemProduct;