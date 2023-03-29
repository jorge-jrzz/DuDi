   
import styled from 'styled-components';

const Contenedor = styled.div`
    background: #fff;
    width: 70%;
    max-width: 70rem; /*1110px*/
    height: 92vh;
    max-height: 55rem;  /* 800px */
    overflow-x:hidden;
    overflow-y: auto;
    box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05);
    border-radius: 0.625rem; /* 10px */
    margin: auto;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 100;
 
    @media(max-width: 60rem){ /* 950px */
        width: 94%;
        margin-top: 20px;
        height: 95vh;
        max-height: none;
    }
`;

export default Contenedor;