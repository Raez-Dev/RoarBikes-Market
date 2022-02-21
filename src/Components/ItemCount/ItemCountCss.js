import styled from 'styled-components'

const ItemCountDivQ = styled.div `
    display: flex;
    flex-flow: row nowrap;
    height: 30px;
`;

const QuantityDiv = styled.div `
    border-bottom: 1px solid #707070;
    border-top: 1px solid #707070;
    display: flex;
    font-size: 1em;    
    justify-content: center;
    min-width: 100px;
    width:100%;
`;

const ButtonLess = styled.button.attrs({ name: 'less' })
`
    border: 1px solid #707070;
    border-radius: 8px 0 0 8px;
    background-color: #FFFFFF;
    min-width: 30px;
`;

const ButtonPlus = styled.button.attrs({ name: 'plus' })
`
    border: 1px solid #707070;
    border-radius: 0 8px 8px 0;
    background-color: #FFFFFF;
    min-width: 30px;
`;

const AddCartButton = styled.button `    
    border-radius: 2.5px;
    background-color: #000000;
    color: #FFFFFF;
    font-size: 1em;
    padding: 0.5rem 1.5rem;
    margin-top: 1rem;
`;

export {
    ItemCountDivQ,
    QuantityDiv,
    ButtonLess,
    ButtonPlus,
    AddCartButton
};