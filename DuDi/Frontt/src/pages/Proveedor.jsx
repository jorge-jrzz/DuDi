/* this is the applicant component/page */
import React, {useState} from 'react';
import { Header, ContenedorHeader, Titulo } from '../components/elements/Header';
import Boton from '../components/elements/Boton';
import { Helmet } from 'react-helmet';
import { Formulario, Input } from '../components/elements/ElementosFormulario';
import './../styles/proveedor.css';
import styled from 'styled-components';
import { ContenedorBoton } from '../components/elements/ElementosFormulario';
import { useNavigate } from 'react-router-dom';

const ContratistaPage = () => {

    const navigate = useNavigate();

  const [inhabilitado, setInhabilitado] = useState('no');
  const [manual, setManual] = useState('si');
  const [codigoConducta, setCodigoConducta] = useState('si')
  const [politicasrh, setPoliticasrh] = useState('si');
  const [sistemasDenuncias, setSistemasDenuncias] = useState('si');

  const [desplegarCont, setDesplegarCont] = useState(true);
  
  const changeInhabilitadoState = () => {
      setInhabilitado('si')
  } /* close the function */

  const changeInhabilitadoState1 = () => {
    setInhabilitado('no')
  } /* close the function */

  const changeManualState = () => {
    setManual('si');
  }
  const changeManualState1 = () => {
    setManual('no');
  }

  const changeCodigoConducta = () => {
    setCodigoConducta('si');
  }
  const changeCodigoConducta1 = () => {
    setCodigoConducta('no');
  }

  const changePoliticasrh = () => {
    setPoliticasrh('si')
  }

  const changePoliticasrh1 = () => {
    setPoliticasrh('no')
  }

  const changeSistemasDenuncia = () => {
    setSistemasDenuncias('si')
  }
  const changeSistemasDenuncia1 = () => {
    setSistemasDenuncias('no')
  }

  const changeDesplegar = () => {
    setDesplegarCont(!desplegarCont)
  }

  const handleSubmit = (e) => {
    navigate('/ficha-tecnica')
  }

  return ( 
        <div className="container">   
          <Helmet>
                <title>proveedor</title>
           </Helmet>

           <Header>
                <ContenedorHeader>
                    <Titulo>Llena los campos</Titulo>
                    <div>
                        <Boton conIcono to={"/log-in"}>salir</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario onSubmit={handleSubmit }>
            <h3>¿Has sido inhabilitado por la Secretaría de Función Pública?</h3>
            <br/>
            <ButtonContainer>
                <button 
                    onClick={changeInhabilitadoState}>SI
                </button>
                <button 
                    onClick={changeInhabilitadoState1}>NO
                </button>
                <div className='answer'>
                    {inhabilitado.toUpperCase()}
                </div>
            </ButtonContainer>
            <br/>
            {inhabilitado === 'si' &&
                <>
                    <h3>Adjunta la constancia de inhabilitación</h3>
                    <Input
                        type={'file'}
                        name={'inhabilitadoFile'}
                    />
                </>
            }
            <br/>
            <h3>¿Cuentas con un manual de organización y procedimientos?</h3>
            <br/>
            <ButtonContainer>
                <button 
                    onClick={changeManualState}>SI
                </button>
                <button 
                    onClick={changeManualState1}>NO
                </button>
                <div className='answer'>
                    {manual.toUpperCase()}
                </div>
            </ButtonContainer>
            {manual === 'si' && 
                <Input
                    type={'file'}
                    name={'manualFile'}
                />
            }
            <h3>¿Cuentas con un Código de Conducta y ética?</h3>
            <br/>
            <ButtonContainer>
                <button 
                    onClick={changeCodigoConducta}>SI
                </button>
                <button 
                    onClick={changeCodigoConducta1}>NO
                </button>
                <div className='answer'>
                    {codigoConducta.toUpperCase()}
                </div>
            </ButtonContainer>
            {codigoConducta === 'si' && 
                <Input
                    type={'file'}
                    name={'manualFile'}
                />
            }

            <h3>¿Cuentas con políticas de recursos humanos tendientes a evitar la incorporación de personas que puedan generar un riesgo a la integridad de la corporación? </h3>
            <br/>
            <ButtonContainer>
                <button 
                    onClick={changePoliticasrh}>SI
                </button>
                <button 
                    onClick={changePoliticasrh1}>NO
                </button>
                <div className='answer'>
                    {politicasrh.toUpperCase()}
                </div>
            </ButtonContainer>

            <h3>¿Cuentas con sistemas adecuados de denuncia? </h3>
            <br/>
            <ButtonContainer>
                <button 
                    onClick={changeSistemasDenuncia}>SI
                </button>
                <button 
                    onClick={changeSistemasDenuncia1}>NO
                </button>
                <div className='answer'>
                    {sistemasDenuncias.toUpperCase()}
                </div>
            </ButtonContainer>
            <br/>
            <h3>¿Cuentas con algunos de los siguientes certificados en materia de integridad? </h3>
            <button className='button1' onClick={changeDesplegar }>{desplegarCont ? 'ocultar' : 'mostrar'}</button>
            <FieldSet>
                <legend>C E R T I F I C A D O S</legend>
                {desplegarCont && 
                    <>
                        <input type={'checkbox'} value={'ISO9001'}/> <p>Certificación ISO 9001: Este certificado es otorgado por la Organización Internacional de Normalización (ISO) y se centra en la gestión de la calidad del sistema de gestión empresarial. Esto implica que la empresa está comprometida con la mejora continua de la calidad de sus productos y servicios.</p>
            
                        <input type={'checkbox'} value={'ISO37001'}/> <p>Certificación ISO 37001: La ISO 37001 ayuda a las empresas a implantar y mantener medidas para detectar, prevenir y resolver el soborno en las actividades comerciales dentro de la empresa y las amenazas contra la organización. Puede utilizarse junto con otros sistemas de gestión como ISO 9001 e ISO 27001. La certificación según la norma ISO 37001 mejora la credibilidad y la fiabilidad de la empresa ante los clientes y las partes interesadas.
                        </p>

                        <input type={'checkbox'} value={'ISO26000'}/> <p>Certificación ISO 26000 en Responsabilidad Social Empresarial: Esta certificación asegura que la empresa está comprometida con la responsabilidad social y que toma en cuenta aspectos como los derechos humanos, el medio ambiente, las prácticas justas de negocio y la ciudadanía responsable.</p>

                        <input type={'checkbox'} value={'GMP'}/> <p>Certificación de Buenas Prácticas de Fabricación (GMP): Este certificado es otorgado por la Comisión Federal para la Protección contra Riesgos Sanitarios (COFEPRIS) y garantiza que la empresa cumple con los estándares de calidad en la producción, control y almacenamiento de medicamentos.
                        </p>

                        <input type={'checkbox'} value={'GCP'}/> <p>Certificación de Buenas Prácticas Clínicas (GCP): La COFEPRIS también otorga este certificado, que garantiza que la empresa cumple con los estándares éticos y científicos en la realización de estudios clínicos en humanos.
                        </p>

                        <input type={'checkbox'} value={'IGLP'}/> <p>Certificación de Buenas Prácticas de Laboratorio (GLP): Este certificado es otorgado por la Secretaría de Medio Ambiente y Recursos Naturales (SEMARNAT) y garantiza que la empresa cumple con los estándares de calidad y éticos en la realización de pruebas en animales y estudios ambientales.
                        </p>

                        <input type={'checkbox'} value={'ESR'}/> <p>Distintivo Empresa Socialmente Responsable (ESR): Este distintivo es otorgado por el Centro Mexicano para la Filantropía (CEMEFI) y la Alianza por la Responsabilidad Social Empresarial (AliaRSE) y garantiza que la empresa tiene un compromiso social y ambiental en su operación.
                        </p>
                    </>
                
                }
                            
            </FieldSet>

            <ContenedorBoton>
                    <Boton primario as="button" type='submit'>E N V I A R</Boton>
            </ContenedorBoton>

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

    legend {
        margin: 0 auto;
        font-size: 20px;
        font-weight: 600;
    }

    p {
        box-shadow: 2px 2px 2px 2px gray;
        padding: 10px;
    }
`;