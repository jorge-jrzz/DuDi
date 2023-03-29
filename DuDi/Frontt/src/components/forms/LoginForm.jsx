import axios from 'axios';
import React, {useState} from 'react';
import Boton from '../elements/Boton';
/* importando las estructuras de un formulario creadas con styled components */
import {Formulario, Input, ContenedorBoton} from '../elements/ElementosFormulario';
import { Header, Titulo, ContenedorHeader} from '../elements/Header';
import { Helmet } from 'react-helmet';

import Alerta from '../elements/Alerta';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const usuario = 'contratista';

    /* creating a navigate object */
    const navigate = useNavigate();
    const URI = 'http://localhost:8080/api/users';

    /* defining deault values */
    const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

    /* the alert will be hidden for default */
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});

    /* function to control the changes in the input */
    const handleChange = (e) => {
        if (e.target.name === 'userName') {
            setUserName(e.target.value);
        }
        else if(e.target.name === 'password'){
            setPassword(e.target.value);
        }
    } /* close handleChange */

    const getUsers = () => {
        fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })    
        
        .catch(error => {
            console.log(error);
        });
    }

    /* handleSubmit function */
    const handleSubmit = (event) => {
        event.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({});
        //console.log(userName, password, password2);

        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        //console.log(expresionRegular.test(userName));
        if(!expresionRegular.test(userName)){
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo: 'error', mensaje: "invalid userName" });
            return;
        }

        if(userName === '' || password === ''){
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo: 'error', mensaje: "fill all gaps" });
            return;
        }
        /* message to check if everything is ok */
        console.log("Login succesfully :)");
        /* sending user to home page depends of entity */
        
        if (usuario === 'contratista') {
            getUsers()
            navigate('/home-contratista')
        }

        
    } /* close handleSubmit */

    return ( 
        <>
            <Helmet>
                <title>Log in</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Log in</Titulo>
                    <div>
                        <Boton conIcono to={"/sign-up"}>Sign up</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario onSubmit={handleSubmit}>
                <Input
                    type='text'
                    name='userName'
                    placeholder='UserName'
                    value={userName}
                    onChange={handleChange}
                />
                <Input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={handleChange}
                />
                <ContenedorBoton>
                    <Boton primario as="button" type='submit'>Login</Boton>
                </ContenedorBoton>
            </Formulario>
            <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta}/>
        </>
     );
}

export default LoginForm;