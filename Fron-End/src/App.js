//IMPORTACIONES
import BarraCategorias from './Components/BarraCategorias.js';
import PanelShowData from './Components/PanelShowData.js';
import InsertData from './Components/InsertData.js';
import {Container,Row} from 'react-bootstrap';
import Welcome from './Components/Welcome.js';
import './App.css';

export default function App() {
  return (
    <Container className='ContainerPrincipal' >
     
     <div className='hijo'>
     
      <Row>

        <BarraCategorias/>
        <Welcome/>
     
      </Row>

      <Row>
        
        <PanelShowData/>
        <InsertData/>

      </Row>
    
      </div>
    
    </Container>
  );
}