import React from 'react'
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import GlobalStyle from './globalStyles';

const Layout = ({ itemcount, children }) => {
    return (
        <>
            <GlobalStyle />
            <div className='layout'>
                <Header itemcount={itemcount} />
                <Main path={"Store/Bikes"}>
                    {children}
                </Main>
                <Footer />
            </div>
        </>
    )
}

Layout.prototype = {
    children: PropTypes.func
}

export default Layout;
