import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FooterCont, DivFlex, DivH, Ul, Li, ButtonAddress, InputText, P } from "./FooterCss";

const Footer = () => {
    return (
        <FooterCont>
            <div className='container'>
                <DivFlex>
                    <Ul>
                        <Li>Company</Li>
                        <Li>Materials</Li>
                        <Li>Our Process</Li>
                    </Ul>
                    <Ul>
                        <Li>Setup</Li>
                        <Li>Warranty</Li>
                        <Li>Bike Registration</Li>
                    </Ul>
                    <Ul>
                        <Li>Contact Us</Li>
                        <Li>Dealer Locator</Li>
                        <Li>Shipping / Returns</Li>
                        <Li>Careers</Li>
                    </Ul>
                    <div>
                        <DivH>
                            <FontAwesomeIcon icon="fa-brands fa-instagram" className='footer-icon' />
                            <FontAwesomeIcon icon="fa-brands fa-twitter" className='footer-icon' />
                            <FontAwesomeIcon icon="fa-brands fa-facebook-f" className='footer-icon' />
                        </DivH>

                        <P>Subscribe to our newsletter</P>

                        <div>
                            <InputText />
                            <ButtonAddress>OK</ButtonAddress>
                        </div>
                    </div>
                </DivFlex>
            </div>
        </FooterCont>
    )
}

export default Footer;