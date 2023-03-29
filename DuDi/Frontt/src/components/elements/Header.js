
import styled from 'styled-components';

const Header = styled.div`
    margin: 0 auto;
    width: 100%;
    padding: 2.5rem; /* 40px */
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }

    /*@media(max-width: 23rem) {
        display: grid;
        grid-template-column: 1fr 1fr;
    }*/
`;
 
const Titulo = styled.h1`
    font-weight: normal;
    text-transform: uppercase;
    -webkit-text-stroke: 1px black;
    color:#807580; 
    font-size: 2.0rem; /* 40px */
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 2rem; /* 32px */
    }
    /*@media(max-width: 23rem) {
       width: 130%;
       margin: 15px auto;
       text-align: center;
    }*/
`;
 
const ContenedorHeader = styled.div`
    margin: 0 auto;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
 
    @media(max-width: 60rem){ /* 950px */
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        text-align: left;
        margin-right: 75px;
        width: 90%;
 
        & > div {
            display: flex;
            margin-bottom: 1.25rem; /* 20px */
            justify-content: end;
            /*border: 2px solid #000;*/
        }
    }

    }
`;
 
const ContenedorBotones = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export {Header, Titulo, ContenedorHeader, ContenedorBotones};