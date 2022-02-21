import React, { useState } from 'react'
import ItemColor from '../ItemColor/ItemColor';
import { ListColorContainer } from './ListColorCss';

const ListColor = ({ listColor = [], orientation = 'row', onColorChange = (item) => { } }) => {

    const [currentColor, setCurrentColor] = useState(listColor[0]);

    const onColorSelect = (item) => {
        onColorChange(item);
        setCurrentColor(item);
    }

    return (
        <>
            <p>Color/{currentColor.name}</p>
            <ListColorContainer orientation={orientation}>
                {
                    listColor.map((item, index) => {
                        return (<ItemColor key={item.name} item={item} onColorChange={onColorSelect} />)
                    })
                }
            </ListColorContainer>
        </>
    )
}

export default ListColor;