import styled from 'styled-components';

const ListDiv = styled.div `    
    display:grid;
    /* flex-flow: row wrap; */    
    justify-items: stretch;
    grid-template-columns: auto;    
    grid-template-rows: max-content ;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-area: list;

   /*min 768px*/
   @media screen and (min-width: 768px){
        grid-template-columns: auto auto  ;    
        grid-template-rows: max-content max-content;
    }

    /*min 1024px*/
    @media screen and (min-width: 1024px)   {
        grid-template-columns: auto auto auto  ;    
        grid-template-rows: max-content max-content max-content ;
    }

    /*min 1280px*/
    @media screen and (min-width: 1280px)   {
        grid-template-columns: auto auto auto  ;    
        grid-template-rows: max-content max-content max-content ;
    }

    /*min 1560px*/
    @media screen and (min-width: 1560px)   {
        grid-template-columns: auto auto auto auto ;    
        grid-template-rows: max-content max-content max-content max-content ;
    }
`;

export { ListDiv }