//IMPORTACIONES
import { Button, Col } from 'react-bootstrap';
import React from 'react';
import '../App.css';

export default function BarraCategorias() {


  return (
    <Col lg="8" className=' mt-2 mb-4'>
    
      <div class="nav center-NavBarra-Categorias rounded segundoColor justify-content-center p-2">

      <Button  className=' rounded-pill '>Back</Button>
          
          
        <Button variant="outline-primary" title='Cereales adfsasdfsafsdf' className=' m-2 rounded-pill  position-relative botontamano'><span className='  textoBotn'>Cereales adfsasdfsafsdf</span>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </Button>
        <Button variant="outline-primary" title='Cereales adfsasdfsafsdf' className='m-2 rounded-pill  position-relative botontamano'><span className='  textoBotn'>Cereales adfsasdfsafsdf</span>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </Button>
        <Button variant="outline-primary" title='Cereales adfsasdfsafsdf' className='m-2 rounded-pill  position-relative botontamano'><span className='  textoBotn'>Cereales adfsasdfsafsdf</span>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </Button>
        <Button variant="outline-primary" title='Cereales adfsasdfsafsdf' className='m-2 rounded-pill  position-relative botontamano'><span className='  textoBotn'>Cereales adfsasdfsafsdf</span>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </Button>
        <Button variant="outline-primary" title='Cereales adfsasdfsafsdf' className='m-2 rounded-pill  position-relative botontamano'><span className='  textoBotn'>Cereales adfsasdfsafsdf</span>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </Button>
        <Button variant="outline-primary" title='Cereales adfsasdfsafsdf' className='m-2 rounded-pill  position-relative botontamano'><span className='  textoBotn'>Cereales adfsasdfsafsdf</span>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </Button>

        <Button className='rounded-pill'>Next</Button>

      </div>
     
    </Col>
  )
}