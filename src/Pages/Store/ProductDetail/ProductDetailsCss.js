import styled from 'styled-components';

const ItemProductDiv = styled.div `
    display: grid;
    gap: 2rem;
    grid-template-areas: "itemProduct-img itemProduct-img itemProduct-details";
    margin-top:20px;
`;

const BannerContainer = styled.div `
     grid-area: "itemProduct-img";
`;

const BannerContainerImg = styled.img `
     width: 100%;
`;

const ItemProductDetailsContainer = styled.div `
    grid-area: "itemProduct-details";
`;

const DetailSpan = styled.span `
     display: flex;
     flex-flow: row nowrap;
`;

const DetailSpanTag = styled.div `
    border: 1px solid #FF8D00;
    padding: 1px 10px;
`;

const DetailSpanYear = styled.div `
    padding: 1px 10px;
`;

const Hr = styled.hr `
    background-color: #333333;
`;

const ProductName = styled.h2 `
    margin: 5px 0;
`;

const ItemCountContainer = styled.div `
    width:160px;
`

export {
    ItemProductDiv,
    ItemCountContainer,
    BannerContainer,
    BannerContainerImg,
    ItemProductDetailsContainer,
    DetailSpan,
    DetailSpanTag,
    DetailSpanYear,
    Hr,
    ProductName
};