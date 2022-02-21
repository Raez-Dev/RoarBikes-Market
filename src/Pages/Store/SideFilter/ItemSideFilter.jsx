import React, { useState } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemDiv = styled.div`
    border:0;
    padding:0 ;
    margin:0 0 20px 0;
    min-width:200px;
`;

const UlDiv = styled.div`
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-between;
    padding-right:20px;
`;

const UlClose = styled.ul`
    display:none;
    padding:0 0 10px 0;
    list-style:none;
`;

const UlOpen = styled.ul`
    display:block;
    padding:0 0 10px 0;
    list-style:none;
`;

const Li = styled.li`    
    color:#707070;
    padding:0;
    margin: 0 0 10px 0 ;
`;


const ItemSideFilter = ({ description, listOption }) => {
    const [open, setOpen] = useState(false);

    const handleOnClick = () =>{
        setOpen(!open)
    }

    return (
        <ItemDiv>
            <UlDiv>
                {description}
                <FontAwesomeIcon icon="fa-solid fa-plus" className='filter-icon' onClick={handleOnClick} />
            </UlDiv>

            {
                open === true ?
                    <UlOpen>
                        {
                            listOption.map((item, index) => {
                                return (<Li key={item}>{item}</Li>);
                            })
                        }
                    </UlOpen> :
                    <UlClose>
                        {
                            listOption.map((item, index) => {
                                return (<Li key={item}>{item}</Li>);
                            })
                        }
                    </UlClose>
            }

        </ItemDiv>
    )
}

export default ItemSideFilter