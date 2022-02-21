import React from 'react'
import ItemCount from '../ItemCount';

const index = ({ greeting, onStoreChange }) => {
    return (
        <>
            <h1>{greeting}</h1>
            <ItemCount stock={5} onStoreChange={onStoreChange} />
        </>
    )
}

export default index
