import styled from 'styled-components';

const BikesDiv = styled.div `
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows:   max-content auto;
  grid-template-areas:  "filter list";
  margin-top:25px;
`;

export { BikesDiv }