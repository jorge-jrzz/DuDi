import axios from 'axios';
import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo, ContenedorHeader} from '../elements/Header';
import Boton from '../elements/Boton';
import {Formulario, Input, ContenedorBoton} from '../elements/ElementosFormulario';
import Alerta from '../elements/Alerta';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8080/api/';

const SignUpForm = () => {
    
    const navigate = useNavigate();
    /* general parameters */
    const [rfc, setRfc] = useState('');
    const [razonSocial, setrazonSocial] = useState('');
	const [denominacionSocial, setdenominacionSocial] = useState('');
	const [domicilioFiscal, setdomicilioFiscal] = useState('');
    const [entityType, setEntityType] = useState('proveedor');

    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');
    const[password2, setPassword2] = useState('');

    /* proveedor params */
    const [representanteLegal, setRespresentanteLegal] = useState('');
    const [gerenteDeCompras, setGerenteDeCompras] = useState('');
    const [GerenteDeCalidad, setGerenteDeCalidad] = useState('');
    const [representanteQuimico, setRepresentanteQuimico] = useState('');
    const [numeroEmpleados, setnumeroEmpleados] = useState('');


    /* por defecto la alerta va a estar oculta */
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});

    /* debugging the entityType */
    console.log(`entity is: ${entityType}`);

    /* function to change the state of entity */
    const changeEntityState = () => {
        if (entityType === 'proveedor') {
            setEntityType('contratista')
        }
        else {
            setEntityType('proveedor')
        }
    }

    const handleChange = (e) => {
    
        switch (e.target.name) {
            case 'razonSocial':
                setrazonSocial(e.target.value);
                break;
            case 'denominacionSocial':
                setdenominacionSocial(e.target.value);
                break;
            case 'domicilioFiscal':
                setdomicilioFiscal(e.target.value);
                break;
            case 'representanteLegal':
                setRespresentanteLegal(e.target.value);
                break;
            case 'gerenteDeCompras':
                setGerenteDeCompras(e.target.value);
                break;
            case 'gerenteDeCalidad':
                setGerenteDeCalidad(e.target.value);
                break;
            case 'representanteQuimico':
                setRepresentanteQuimico(e.target.value);
                break;
            case 'rfc':
                setRfc(e.target.value)
                break;
            case 'numeroEmpleados':
                setnumeroEmpleados(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'password2':
                setPassword2(e.target.value)
                break;
            case 'username':
                setUserName(e.target.value)
                break;
            default:
                break;
        } 
        console.log(razonSocial);
        console.log(entityType);
    }

    const store = async () => {
        if (entityType === 'proveedor') {
            await axios.post(URI, {
                rfc: rfc,
                razonSocial: razonSocial,
                denominacionSocial: denominacionSocial,
                domicilioFiscal: domicilioFiscal,
                entidad: entityType,
                numeroEmpleados: numeroEmpleados,
                representanteLegal: representanteLegal,
                gerenteDeCompras: gerenteDeCompras,
                GerenteDeCalidad:GerenteDeCalidad,
            })  
        } else {
            await axios.post(URI, {
                rfc: rfc,
                razonSocial: razonSocial,
                denominacionSocial: denominacionSocial,
                domicilioFiscal: domicilioFiscal,
                entidad: entityType
            })   
        }
        navigate('/home-contratista')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({});
        //console.log(razonSocial, denominacionSocial, domicilioFiscal);

        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        //console.log(expresionRegular.test(razonSocial));
        // if(!expresionRegular.test(razonSocial)){
        //     cambiarEstadoAlerta(true);
        //     cambiarAlerta({tipo: 'error', mensaje: "Invalid razonSocial" });
        //     return;
        // }
        if(razonSocial === '' || denominacionSocial === '' || domicilioFiscal === ''){
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo: 'error', mensaje: "fill all gaps" });
            return;
        }
        if (password !== password2) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo: 'error', mensaje: "las passwords deben ser iguales" });
            return;
        }

        console.log("register succesfully for contratista :)");  
        store()
        navigate('/home-contratista')
    }

    /* handle submit for proveedor */
    const handleSubmit2 = (event) => {
        event.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({});
        //console.log(razonSocial, denominacionSocial, domicilioFiscal);

        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        //console.log(expresionRegular.test(razonSocial));
        // if(!expresionRegular.test(razonSocial)){
        //     cambiarEstadoAlerta(true);
        //     cambiarAlerta({tipo: 'error', mensaje: "Invalid razonSocial" });
        //     return;
        // }
        if(razonSocial === '' || denominacionSocial === '' || domicilioFiscal === ''){
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo: 'error', mensaje: "fill all gaps" });
            return;
        }
        if (password !== password2) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({tipo: 'error', mensaje: "Los passwords deben ser iguales" });
            return;
        }

        console.log("register succesfully for proveedor :)");    
        store()
        navigate('/home-proveedor')
    }

    return ( 
        <>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>R E G I S T R O</Titulo>
                    <div>
                        <Boton conIcono to={"/log-in"}>Log in</Boton>
                    </div>
                </ContenedorHeader>
            </Header>
            <h3>SELECCIONA TU ENTIDAD</h3>
            <h3>SELECCIONADA: <span style={{color: 'brown'}}>{entityType.toUpperCase()}</span></h3>
            <EntityContainer>
                <button onClick={changeEntityState}>cambiar</button>
            </EntityContainer>
            <Formulario action='' onSubmit={entityType === 'contratista' ?  handleSubmit : handleSubmit2}>

                {entityType === "proveedor" ? 
                    <>
                        <Input
                            type='text'
                            name='rfc'
                            placeholder='R F C'
                            value={rfc}
                            onChange={handleChange}
                        />
                        <Input
                            type='text'
                            name='razonSocial'
                            placeholder='Razón social'
                            value={razonSocial}
                            onChange={handleChange}
                        />
                        <Input
                            type='text'
                            name='denominacionSocial'
                            placeholder='Denominación social'
                            value={denominacionSocial}
                            onChange={handleChange}
                        />
                        <Input 
                            type="text"
                            name="domicilioFiscal"
                            placeholder="Domicilio fiscal"
                            value={domicilioFiscal}
                            onChange={handleChange}
                        />
                        <FieldSet>
                            <legend>Puestos estratégicos de la empresa</legend>
                            <Input 
                                type='text'
                                name='representanteLegal'
                                placeholder='Representante legal'
                                value={representanteLegal}
                                onChange={handleChange}
                            />
                            <Input 
                                type='text'
                                name='gerenteDeCompras'
                                placeholder='Gerente de compras'
                                value={gerenteDeCompras}
                                onChange={handleChange}
                            />
                            <Input 
                                type='text'
                                name='gerenteDeCalidad'
                                placeholder='Gerente de calidad'
                                value={GerenteDeCalidad}
                                onChange={handleChange}
                            />
                            <Input 
                                type='text'
                                name='representanteQuimico'
                                placeholder='Representante Químico'
                                value={representanteQuimico}
                                onChange={handleChange}
                            />
                        </FieldSet>
                        <Input type='text'
                                name='numeroEmpleados'
                                placeholder='Número de empleados'
                                value={numeroEmpleados}
                                onChange={handleChange} 
                            
                        />
                        <Input type='text'
                                name='username'
                                placeholder='nombre de Usuario'
                                value={userName}
                                onChange={handleChange} 
                            
                        />
                        <Input type='password'
                                name='password'
                                placeholder='contraseña'
                                value={password}
                                onChange={handleChange} 
                        />
                        <Input type='password'
                                name='password2'
                                placeholder='reptite la contraseña'
                                value={password2}
                                onChange={handleChange} 
                        />
                    </>
                :
                    <>
                        <Input
                            type='text'
                            name='rfc'
                            placeholder='R F C'
                            value={rfc}
                            onChange={handleChange}
                        />
                        <Input
                            type='text'
                            name='razonSocial'
                            placeholder='Razón social'
                            value={razonSocial}
                            onChange={handleChange}
                        />
                        <Input
                            type='denominacionSocial'
                            name='denominacionSocial'
                            placeholder='denominación social'
                            value={denominacionSocial}
                            onChange={handleChange}
                        />
                        <Input 
                            type="denominacionSocial"
                            name="domicilioFiscal"
                            placeholder="Domicilio fiscal"
                            value={domicilioFiscal}
                            onChange={handleChange}
                        />
                        <Input type='text'
                                name='username'
                                placeholder='nombre de Usuario'
                                value={userName}
                                onChange={handleChange} 
                            
                        />
                        <Input type='password'
                                name='password'
                                placeholder='contraseña'
                                value={password}
                                onChange={handleChange} 
                        />
                        <Input type='password'
                                name='password2'
                                placeholder='reptite la contraseña'
                                value={password2}
                                onChange={handleChange} 
                        />
                    </>
                }
                
                <ContenedorBoton>
                    <Boton primario as="button" type='submit'>Registrarse</Boton>
                </ContenedorBoton>
            </Formulario>
            <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} cambiarEstadoAlerta={cambiarEstadoAlerta}/>
        </>
     );
}
export default SignUpForm;

/* styled components */
const EntityContainer = styled('div')`
    padding: 5px;

    button {
        border-radius: 15px;
        font-size: 1.5em;
        cursor: pointer;
        padding: 10px;
        color: white;
        background: #0c1139;
        cursor: pointer;
    }

    button:hover {
        opacity: .7;
    }
`;

const FieldSet = styled('fieldset')`
    margin: 10px;
    border: 5px solid gray;
    border-radius: 10px;

    legend {
        margin: 0 auto;
        font-size: 20px;
        font-weight: 600;
    }
`;