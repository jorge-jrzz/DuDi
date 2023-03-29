/* this is the applicant component/page */
import React, {useState} from 'react';
import { Header, ContenedorHeader, Titulo } from '../components/elements/Header';
import Boton from '../components/elements/Boton';
import { Helmet } from 'react-helmet';
import { Formulario, Input } from '../components/elements/ElementosFormulario';
import './../styles/contratista.css';
import styled from 'styled-components';
import { ContenedorBoton } from '../components/elements/ElementosFormulario';

const ContratistaPage = () => {

  const [rfc, setRfc] = useState('');
  const [domicilioFiscal, setdomicilioFiscal] = useState('');
  const [correo, setCorreo] = useState('');
  
  const handleChange = (e) => {
    
    switch (e.target.name) {
        case 'rfc':
            setRfc(e.target.value);
            break;
        case 'domicilioFiscal':
            setdomicilioFiscal(e.target.value);
            break;
        case 'correo':
            setCorreo(e.target.value);
            break;
        default:
            break;
    }
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ESPERA...')
  }

  return ( 
        <div className="container">   
          <Helmet>
                <title>contratista</title>
           </Helmet>

           <Header>
                <ContenedorHeader>
                    <Titulo>Datos de institución (tercero)</Titulo>
                    <div>
                        <Boton conIcono to={"/log-in"}>salir</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario onSubmit={handleSubmit }>
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
                name='domicilioFiscal'
                placeholder='Domicilio fiscal'
                value={domicilioFiscal}
                onChange={handleChange}
            />
            <Input
                type='email'
                name='correo'
                placeholder='correo'
                value={correo}
                onChange={handleChange}
            />
            <ContenedorBoton>
                    <Boton primario as="button" type='submit'>E N V I A R</Boton>
            </ContenedorBoton>
            </>
            </Formulario>
        </div>
     );
}
 
export default ContratistaPage;

const ButtonContainer = styled('div')`
    box-shadow: 2px 2px 2px 2px gray;
    padding: 5px;
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    padding-top: 15px;

    button {
        box-shadow: 1px 1px 1px 1px black;
        width: 20%;
        font-size: 1.0em;
        cursor: pointer;
        padding: 7px;
        margin-bottom: 10px;
        border-radius: 20px;
    }

    button:hover {
        background: gray;
        opacity: 0.5;
    }

    .answer {
        box-shadow: 2px 2px 2px 2px gray;
        width: 15%;
        font-size: 1.5;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 20px;
        font-weight: 600;
    }
`;

const FieldSet = styled('fieldset')`
    margin: 10px;
    border-radius: 10px;
    text-align: left;
    display: flex;

    legend {
        margin: 0 auto;
        font-size: 20px;
        font-weight: 600;
    }
`;