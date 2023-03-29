
import React from 'react';
import {ReactComponent as IconoCerrarSesion} from './../imagenes/log-out.svg';
import Boton from './Boton'
import { Auth } from 'firebase/auth';
/* función de firebase para cerrar sesión */
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
/* useNavigate para después de cerrar sesión ir al inicio de sesión nuevamente */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
/* importando NavLink */
import { NavLink } from 'react-router-dom';

const BotonCerrarSesion = () => {
    
    const navigate = useNavigate();

    /* función de cerrar sesión */
    const cerrarSesion = async () => {
        /* signOut es una función asíncrona por lo que se usa await y async, al igual que try catch por si hay algún error */
        try {
            await auth.signOut();
            navigate('/iniciar-sesion');
            
        } catch (error) {
            console.log(error);
        }
    } /* cierre de la función para cerrar la sesión */

    return ( 
        <>
            <BtnCerrarSesion title='Cerrar Sesión' iconoGrande as="button" onClick={cerrarSesion}>
                <span></span>
                <IconoCerrarSesion/>
            </BtnCerrarSesion>
        </>
     );
}

/*creando un botón para cerrar sesión */
const BtnCerrarSesion = styled(NavLink)`
    background: ${(props) => props.primario ? '#f58b46' : '#000'};
    width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */
    margin-left: 1.25rem; /* 20px */
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: 3.75rem; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    overflow: hidden;
    position: relative;


    span {
        position: absolute;
        width: 100%;
        height: 100px;
        border-radius: 50%;
        background: #ffffff;
        opacity: .3;
        top: -50%;
        left: -100%;
        transition: .4s;
    }

    &:hover span {
        left: -10%;
    }

    &:hover {
        color: #fd8430;
        font-weight: bold;
        background: #ff8b00 ;
        box-shadow: 0 5px 5px #000;
        transition: .4s;
    }

    svg {
        height: ${(props) => props.iconoGrande ? '100%' : '0.75rem;'};  /* 12px */
        fill: white;
    }
`;

 
export default BotonCerrarSesion;