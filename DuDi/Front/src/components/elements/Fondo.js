
import React from "react";
import styled from "styled-components";
/* importando la imagen de fondo como si fuera un componente */
//import {ReactComponent as imagen} from './../imagenes/unDraw.svg';

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;
 
// const ImagenArriba = styled(imagen)`
//     position: fixed;
//     z-index: 1;
//     top: 2.5rem; /* 40px */
//     left: 2.5rem; /* 40px */
// `;
 
// const ImagenAbajo = styled(imagen)`
//     position: fixed;
//     z-index: 1;
//     bottom: 2.5rem; /* 40px */
//     right: 2.5rem; /* 40px */
// `;

const Fondo = () => {
    return ( 
        <>
            {/* <ImagenArriba />  */}
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#14a65b" 
                fillOpacity="1" 
                d="M0,64L80,106.7C160,149,320,235,480,266.7C640,299,800,277,960,229.3C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                </path></Svg>
            {/* <ImagenAbajo /> */}
        </>
     );
}
 
export default Fondo;