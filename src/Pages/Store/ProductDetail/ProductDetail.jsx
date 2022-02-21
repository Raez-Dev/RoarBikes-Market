import React, { useState } from 'react'
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

const colors = [
    {
        name: 'Satin Lithium Grey',
        color: 'grey',
        img: 'https://trek.scene7.com/is/image/TrekBicycleProducts/XCaliber8_22_35069_A_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440'
    }, {
        name: 'Crystal White',
        color: 'white',
        img: 'https://trek.scene7.com/is/image/TrekBicycleProducts/XCaliber8_22_35069_B_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440'
    }
];

const ProductDetail = ({ stock, onStoreChange }) => {

    const [CurrentColor, setCurrentColor] = useState(colors[0]);  //0: Grey || 1 White
    const [quantity, setQuantity] = useState(1);

    const onColorChange = (item) => {
        setCurrentColor(item);
    }

    const onQuantityChange = (e) => {
        e.preventDefault();
        let buttonType = e.target.className;
        if (buttonType.includes('plus')) {
            if (stock >= quantity + 1) {
                setQuantity(quantity + 1)
            }
        }
        else {
            if (quantity !== 1) {
                setQuantity(quantity - 1)
            }
        }
    }

    const onClickAddStore = () => {

        let product = {
            itemcount: quantity
        }
        onStoreChange(product);
    }

    return (
        <ItemProductDiv>
            <BannerContainer>
                <BannerContainerImg src={CurrentColor.img} alt={CurrentColor.name} />
            </BannerContainer>
            <ItemProductDetailsContainer>
                <DetailSpan>
                    <DetailSpanTag>NUEVA</DetailSpanTag>
                    <DetailSpanYear>2022</DetailSpanYear>
                </DetailSpan>
                <ProductName>X-Caliber 8</ProductName>
                <div>1.349,00 €</div>
                <Hr />
                <p>La X-Caliber 8 es una bicicleta de cross country diseñada para rodar rápido y recorrer rutas largas por senderos. Se ha fabricado prestando especial atención a la calidad, al precio y a los componentes que marcan realmente una diferencia en el rendimiento. La transmisión Shimano 1x, la horquilla RockShox y los frenos de disco hidráulico la convierten en una excelente elección para los nuevos ciclistas de montaña y corredores de cross country que buscan velocidad y diversión en sus aventuras por los singletrack.</p>

                <ListColor listColor={colors} orientation={'row'} onColorChange={onColorChange} />
                <ItemCountContainer>
                    <ItemCount item={{ initial: 1, stock: 5 }} />
                </ItemCountContainer>

            </ItemProductDetailsContainer>
        </ItemProductDiv>
    )
}

export default ProductDetail