import './../styles/fichaT.css';
import file from './../images/ONU2.pdf';

const FichaTecnica = () => {
    
    return ( 
        <div className='container'>
            <h1>FICHA TÉCNICA</h1>
            <iframe src={file}/>
        </div>
     );
}
 
export default FichaTecnica;