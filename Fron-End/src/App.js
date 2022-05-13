//IMPORTACIONES
import { UpdateListProducts } from './Contextos/categoryContext/productContext/ListProductsUpdate';
import { ProductSelected } from './Contextos/categoryContext/productContext/ProductSelected';
import {CategorySelected} from './Contextos/categoryContext/CategorySelected';
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

        <CategorySelected>

          <UpdateListProducts>

            <Row>

              <BarraCategorias/>
              <Welcome/>
     
            </Row>

             <Row>
            
             <ProductSelected>
            
                <PanelShowData/>
          
              </ProductSelected>

              <InsertData/>

             </Row>

          </UpdateListProducts>

        </CategorySelected>

      </div>
      
    </Container>
  );
}