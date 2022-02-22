import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
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
    const [Product, setProduct] = useState()
    const { id } = useParams();

    useEffect(() => {
        getProduct(id).then((product) => {
            console.log(product);
            setProduct(product);
            setCurrentColor(product.variants[0]);
        });

    }, [])

    const onColorChange = (item) => {
        setCurrentColor(item);
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
                                <ItemCount itemStore={Product.itemStore} />
                            </ItemCountContainer>

                        </ItemProductDetailsContainer>
                    </ItemProductDiv>
                    : <></>
            }
        </>
    )
}

export default ProductDetail