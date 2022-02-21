import styled from 'styled-components'

const ItemProductDiv = styled.div `
    align-self:stretch;
    display:grid;
    box-shadow:  0 0 2px 0.5px #707070;
    justify-content:center;
    width:240px;
    max-width:220px;
    padding:15px;
`;

const Img = styled.img `
    object-fit:cover;
    object-position:cover;
    width:100%;
`;

const NameDescription = styled.p `
    text-align:center;
`;

export {
    ItemProductDiv,
    Img,
    NameDescription
}