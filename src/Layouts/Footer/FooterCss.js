import styled from 'styled-components';

const FooterCont = styled.footer `
    background-color:black;
    color:white;
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-around;
    grid-area:footer;
    padding: 20px 0;
    width: 100%;
`;

const DivFlex = styled.div `    
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-between;    
    padding:10px 0 ;
`;

const Ul = styled.ul `
    list-style:none;
    padding:0;
    margin:0;
`;

const DivH = styled.div `
    color:white;
    display:flex;
`;

const P = styled.p `
    font-size:14px;
    font-family:'Oswald';
    font-weight:400;
`;

const Li = styled.li `
    font-size:14px;
    font-family:'Oswald';
    font-weight:400;
    margin-bottom:10px;
`;

const InputText = styled.input.attrs({ placeholder: 'Email Address' })
`
    background: black;
    border:1.5px solid #FFF;
    border-radius:5px 0 0 5px;
    color:white;
    height:20px;
    padding-left: 10px;
    width:150px;
`;

const ButtonAddress = styled.button.attrs({ text: 'Email Address' })
`
    background: white;
    border:1.5px solid #FFF;
    border-radius:0 5px 5px 0;
    color:black;
    height:25px;
`;

export { FooterCont, DivFlex, DivH, Ul, Li, ButtonAddress, InputText, P }