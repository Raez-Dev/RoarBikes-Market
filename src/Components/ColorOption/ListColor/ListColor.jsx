import React, { useEffect, useState } from 'react'
import ItemColor from '../ItemColor/ItemColor';
import { ListColorContainer } from './ListColorCss';

const ListColor = ({ listColor = [], orientation = 'row', onColorChange = (item) => { } }) => {

    const [currentColor, setCurrentColor] = useState({});
    const [ListColor, setListColor] = useState([]);

    useEffect(() => {
        setListColor(listColor);
        setCurrentColor(listColor[0]);
    }, []);

    const onColorSelect = (item) => {
        onColorChange(item);
        setCurrentColor(item);
    }

    return (
        <>
            <p>Color/{currentColor.name}</p>
            <ListColorContainer orientation={orientation}>
                {
                    ListColor.map((item, index) => {
                        return (<ItemColor key={item.name} item={item} onColorChange={onColorSelect} />)
                    })
                }
            </ListColorContainer>
        </>
    )
}

export default ListColor;