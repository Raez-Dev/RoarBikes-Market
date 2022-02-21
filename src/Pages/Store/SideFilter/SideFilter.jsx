import React from 'react'
import ItemSideFilter from './ItemSideFilter';
import styled from 'styled-components';

const SideFilterDiv = styled.div`
    grid-area: filter;



`;

const SideFilter = () => {
    return (
        <SideFilterDiv>
            <ItemSideFilter description={'Category'} listOption={['Active','Road','Mountain']} />
            <ItemSideFilter description={'Material'} listOption={['Aluminum','Carbon']} />
        </SideFilterDiv>
    )
}

export default SideFilter;