import styled from 'styled-components';

const CartContainer = styled.div `  
  margin-top:25px;
`;

const CardContainer = styled.div `  
    display:flex;
    flex-flow:row nowrap;  
    margin-bottom:5px;
`;

const ImgContainer = styled.div `      
    box-shadow:  0 0 2px 0.5px #707070;
    max-width:250px;
    padding:10px;
`;
const ImgProduct = styled.img `     
    object-fit:cover;
    object-position:cover; 
    width:100%
`;
const DetailsContainer = styled.div `     
    box-shadow:  0 0 2px 0.5px #707070; 
    padding:10px;    
    min-width:250px;
`;
const TitleProduct = styled.h2 `
    font-size:22px;
`;
const PriceProduct = styled.p `
    font-size:18px;
`;
const QuantityProduct = styled.p `
    font-size:16px;
`;
const OptionsContainer = styled.div `    
    box-shadow:  0 0 2px 0.5px #707070; 
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    padding:10px;   
    min-width:auto;
`;
const OptionButton = styled.button `
    background-color:#FFF;
    border-color:#FFD200;
    padding: 5px 10px;
    font-size: 12px;
`;

export { CartContainer, CardContainer, ImgContainer, ImgProduct, DetailsContainer, TitleProduct, PriceProduct, QuantityProduct, OptionsContainer, OptionButton }