import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import { ImgBanner, MainDiv } from './MainCss';

const Main = ({ path, children }) => {
    return (
        <MainDiv>
            {path ? <> <Breadcrumbs path={path} /> <ImgBanner src={'https://assets.specialized.com/i/specialized/plp-banner_Bikes?$hybris-category-hero'} /> </> : <></>}
            <div className="container">
                {children}
            </div>
        </MainDiv>
    )
}

Main.propTypes = {
    children: PropTypes.object,
}
export default Main;