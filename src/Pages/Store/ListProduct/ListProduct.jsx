import React from 'react'
import ItemProduct from '../ItemProduct/ItemProduct';
import { ListDiv } from './ListProductCss';

const List = ({ ProductList = [] }) => {
    return (
        <ListDiv>
            {
                ProductList.map((item, index) => {
                    return (
                        <ItemProduct
                            key={index}
                            item={item}                            
                            itemStore={item.itemStore}
                        />
                    );
                })
            }

        </ListDiv>
    )
}

export default List