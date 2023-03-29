
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Boton = styled(NavLink)`
    background: ${(props) => props.primario ? '#514c7b' : '#000'};
    width: ${(props) => props.conIcono ? '3.4rem' : 'auto'}; /* 250px */
    margin-left: 1.25rem; /* 20px */
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: ${(props) => props.conIcono ? 'auto' : '3.4rem'}; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    font-size: 1.0rem; /* 20px */
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
        background: #000;
        opacity: .1;
        top: -50%;
        left: -100%;
        transition: .4s;
    }

    &:hover span {
        left: -10%;
    }

    &:hover {
        font-weight: bold;
        background:#946995;
        box-shadow: 0 5px 5px #000;
        transition: .3s;
    }
 
    svg {
        height: ${(props) => props.iconoGrande ? '100%' : '0.75rem;'};  /* 12px */
        fill: white;
    }
`;

export default Boton;