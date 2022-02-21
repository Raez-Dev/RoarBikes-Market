import styled from "styled-components";

const Color = styled.li `
    background-color: ${props=>props.item.color} ;
    border: 1px solid #333333;
    border-radius: 25px;
    padding: 0.5px;
    height: 30px;
    margin-right: 5px;
    width: 30px;
`

export { Color };