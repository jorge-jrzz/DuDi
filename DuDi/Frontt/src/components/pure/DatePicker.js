/* Author: Juan Sebastian Peña Angarita 
   UAM CUAJIMALPA - CDMX  */

import React, {useState} from 'react';
/* importando styled components */
import styled from 'styled-components';
/* importando el tema */
import theme from '../theme';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
/* función para obtener la fecha del objeto fecha*/ 
import format from 'date-fns/format'
/* importando el lenguaje español */
import { es } from 'date-fns/locale'

const DatePicker = ({fecha, cambiarFecha}) => {

    /* función para dar formato a la fecha(ya que esta es un objeto, y le asigno un valor por default por si no hay ninguna fecha aún */
    const formatoFecha = (fecha = new Date()) => {
        return format(fecha, 'dd - MMMM - yyyy', {locale: es});
    }

    /* usando estado para mostrar y ocultar el calendario */
    const [visible, cambiarVisible] = useState(false);

    return ( 
        <ContenedorInput>
            {/* readOnly solo para que el usuario pueda ller el input pero no imprimir */}
            <input 
                type="text" 
                readOnly 
                value={formatoFecha(fecha)}
                onClick={() => cambiarVisible(!visible)}
                ></input>
            {/* importando el componente del calendario y dandole la propiedades mode='single' para poder seleccionar dias 
                onSelect es una función que sirve para cambiar el estado y selected para que cargue esa fecha al cargar*/}
            {/* si el estado visible es verdadero se despliega el calendario (DayPicker) */}
            {visible && <DayPicker locale={es} mode='single' selected={fecha} onSelect={cambiarFecha} />}
        </ContenedorInput>
     );
}

const ContenedorInput = styled.div`
    position: relative;

    input {
        font-family: 'Work Sans', sans-serif;
        box-sizing: border-box;
        background: ${theme.grisClaro};
        border: 3px solid orange;
        cursor: pointer;
        border-radius: 0.625rem; /* 10px */
        height: 5rem; /* 80px */
        width: 100%;
        padding: 0 1.25rem; /* 20px */
        font-size: 1.5rem; /* 24px */
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
    }

    /* reglas para reactDatePicker */
    .rdp {
        position: absolute;
    }

    .rdp-months {
        display: flex;
        justify-content: center;
    }

    .rdp-month {
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        border-radius: 10px;
    }


    @media (max-width: 60rem) {
        /* 950px */
        & > * {
            width: 100%;
        }
    }
`;
 
export default DatePicker;