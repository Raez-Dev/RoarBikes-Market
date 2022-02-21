import React, { useEffect, useState } from 'react'
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

const ProductDetail = ({ product = {
    name: '',
    description: '',
    price: 0,
    img: {
        src: 'https://trek.scene7.com/is/image/TrekBicycleProducts/XCaliber8_22_35069_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
        alt: 'X-Caliber 8',
    },
    variants: [
        {
            name: '',
            color: '',
            img: ''
        }
    ],
    itemStore: {
        initial: 0,
        stock: 0
    }
} }) => {

    const [CurrentColor, setCurrentColor] = useState({});

    useEffect(() => {
        setCurrentColor(product.variants[0]);
    }, [])

    const onColorChange = (item) => {
        setCurrentColor(item);
    }

    return (
        <ItemProductDiv>
            <BannerContainer>
                <BannerContainerImg src={CurrentColor.img} alt={CurrentColor.name} />
            </BannerContainer>
            <ItemProductDetailsContainer>

                {
                    product.span ?
                        <DetailSpan>
                            <DetailSpanTag>NUEVA</DetailSpanTag>
                            <DetailSpanYear>2022</DetailSpanYear>
                        </DetailSpan>
                        :
                        <></>
                }
                <ProductName>{product.name}</ProductName>
                <div>{product.price} €</div>
                <Hr />
                <p>{product.description}</p>

                <ListColor listColor={product.variants} orientation={'row'} onColorChange={onColorChange} />
                <ItemCountContainer>
                    <ItemCount itemStore={product.itemStore} />
                </ItemCountContainer>

            </ItemProductDetailsContainer>
        </ItemProductDiv>
    )
}

export default ProductDetail