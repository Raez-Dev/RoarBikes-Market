import React from 'react';
import styled from 'styled-components';
import Navbar from "../../Components/Navbar/Navbar";

const Div = styled.header`
    background-color:white;
    grid-area: header;
    overflow: hidden;  
    position: fixed;
    width: 100%; 
`;

const Header = ({ itemcount }) => {
    return (
        <Div>
            <Navbar itemcount={itemcount} ></Navbar>
        </Div>
    )
}

export default Header;