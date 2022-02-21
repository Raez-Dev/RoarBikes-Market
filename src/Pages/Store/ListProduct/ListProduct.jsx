import React from 'react'
import ItemProduct from '../ItemProduct/ItemProduct';
import { ListDiv } from './ListProductCss';

// const ProductList = [
//     {
//         name: 'X-Caliber 8',
//         img: {
//             src: 'https://trek.scene7.com/is/image/TrekBicycleProducts/XCaliber8_22_35069_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
//             alt: 'X-Caliber 8',
//         },
//         itemStore: {
//             initial: 1,
//             stock: 2
//         }
//     },
//     {
//         name: 'Supercaliber 9.9 XX1 AXS',
//         img: {
//             src: 'https://trek.scene7.com/is/image/TrekBicycleProducts/XCaliber8_22_35069_A_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
//             alt: 'Supercaliber 9.9 XX1 AXS',
//         },
//         itemStore: {
//             initial: 5,
//             stock: 5
//         }
//     },
//     {
//         name: 'Top Fuel 9.9 XX1 AXS',
//         img: {
//             src: 'https://trek.scene7.com/is/image/TrekBicycleProducts/TopFuel99XX1AXS_22_35326_B_Primary?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440',
//             alt: 'Top Fuel 9.9 XX1 AXS',
//         },
//         itemStore: {
//             initial: 4,
//             stock: 15
//         }
//     },
//     {
//         name: 'Procaliber 9.8',
//         img: {
//             src: 'https://trek.scene7.com/is/image/TrekBicycleProducts/Procaliber98_22_35115_A_Primary?$responsive-pjpg$&cache=on,on&wid=1024&hei=768',
//             alt: 'Procaliber 9.8',
//         },
//         itemStore: {
//             initial: 13,
//             stock: 12
//         }
//     },
// ];


const List = ({ ProductList = [] }) => {
    return (
        <ListDiv>
            {
                ProductList.map((item, index) => {
                    return (
                        <ItemProduct
                            key={index}
                            name={item.name}
                            img={item.img}
                            itemStore={item.itemStore}
                        />
                    );
                })
            }

        </ListDiv>
    )
}

export default List