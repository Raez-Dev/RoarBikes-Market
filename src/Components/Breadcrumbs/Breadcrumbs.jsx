import React from 'react'
import styled from 'styled-components';

const DivGroup = styled.div`
    display:flex;
    margin: 25px 0;
    width:100%;
`;

const A = styled.a`
    text-decoration:none;
    font-size:16px;
`;

const ADis = styled.a.attrs({ disabled: true })`
    text-decoration:none;
    font-size:16px;
`;

const PBackBar = styled.p`
    margin: 0 5px;
`;

const Breadcrumbs = ({ path }) => {
    return (
        <div className="container">

            <DivGroup>
                {
                    path.split('/').map((item, index) => {
                        if (path.split('/').length === (index + 1)) {
                            return <A href='#' key={index}>{item}</A>;
                        } else {
                            return <React.Fragment key={index}>
                                <ADis>{item}</ADis><PBackBar>/</PBackBar>
                            </React.Fragment>
                        }
                    })
                }
            </DivGroup >
        </div>
    )
}

export default Breadcrumbs;