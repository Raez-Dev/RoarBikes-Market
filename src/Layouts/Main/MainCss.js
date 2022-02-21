import styled from 'styled-components';

const ImgBanner = styled.img `    
    width:100%;
`;

const MainDiv = styled.main `    
    align-self:flex-start; 
    align-items:center;
    display:flex;    
    flex-flow: column nowrap;
    grid-area:main;    
    justify-content:center;
    padding:0 0 20px;
    border-top: 10px solid lightgrey;
    margin-top:77px;
`;

export { ImgBanner, MainDiv }