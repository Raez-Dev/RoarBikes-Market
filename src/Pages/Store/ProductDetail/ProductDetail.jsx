import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import ListColor from '../../../Components/ColorOption/ListColor/ListColor';
import ItemCount from '../../../Components/ItemCount/ItemCount';
import {
    ItemProductDiv,
    ItemCountContainer,
    BannerContainer,
    BannerContainerImg,
    ItemProductDetailsContainer,
    DetailSpan,
    DetailSpanTag,
    DetailSpanYear,
    Hr,
    ProductName
} from './ProductDetailsCss';

import { getProduct } from '../../../Services/Product/ProductAPI';

const ProductDetail = () => {

    const [CurrentColor, setCurrentColor] = useState({});
    const [Product, setProduct] = useState();
    const [Quantity, setQuantity] = useState(0);
    const [EndBuy, setEndBuy] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const { isInCart, addItem } = useContext(CartContext);

    useEffect(() => {
        getProduct(id).then((product) => {
            setProduct(product);
            setCurrentColor(product.variants[0]);
            const response = isInCart(product.id);
            if (response.IsSuccess === true) {
                setEndBuy(true);
            }
        });

    }, [])

    const onColorChange = (item) => {
        setCurrentColor(item);
    }

    const onAddStore = (quantity) => {
        setQuantity(quantity);
        setEndBuy(true);
    }

    const onEndPurchase = () => {

        const product = {
            idProduct: Product.id,
            name: Product.name,
            price: Product.price,
            quantity: Quantity,
            img: Product.img
        };

        const response = isInCart(Product.id);
        if (response.IsSuccess === false) {
            addItem(product);
            navigate('../cart');
        } else {
            navigate('../cart');
        }
    }

    return (
        <>
            {
                Product ?
                    <ItemProductDiv>
                        <BannerContainer>
                            <BannerContainerImg src={CurrentColor.img} alt={CurrentColor.name} />
                        </BannerContainer>
                        <ItemProductDetailsContainer>

                            {
                                Product.span ?
                                    <DetailSpan>
                                        <DetailSpanTag>NUEVA</DetailSpanTag>
                                        <DetailSpanYear>2022</DetailSpanYear>
                                    </DetailSpan>
                                    :
                                    <></>
                            }
                            <ProductName>{Product.name}</ProductName>
                            <div>{Product.price} €</div>
                            <Hr />
                            <p>{Product.description}</p>

                            <ListColor listColor={Product.variants} orientation={'row'} onColorChange={onColorChange} />
                            <ItemCountContainer>
                                <ItemCount itemStore={Product.itemStore} onAddStore={onAddStore} onEndPurchase={onEndPurchase} endBuy={EndBuy} />
                            </ItemCountContainer>

                        </ItemProductDetailsContainer>
                    </ItemProductDiv>
                    : <></>
            }
        </>
    )
}

export default ProductDetail