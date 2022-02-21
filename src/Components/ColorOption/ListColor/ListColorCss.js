import styled from "styled-components";

const ListColorContainer = styled.ul `
    display: flex;
    flex-direction: ${ props=> props.orientation || 'row'};
    list-style: none;
    padding: 0px
`;

export { ListColorContainer };