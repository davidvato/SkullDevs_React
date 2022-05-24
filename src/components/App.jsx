import React  from 'react';

import Barra from './Barra';
import Asi_iniciamos from './Asi_iniciamos';
import Miembros from './Miembros';
import Imagen_header from './Imagen_header';
import Servicios from './Servicios';
import Contactanos from './Contactanos';


function App() {
  return (
    <div>
      
      <Barra/>
      <Imagen_header/>
      <Asi_iniciamos/>
      <Miembros/>
      <Servicios/>
      <Contactanos/>
    </div>
  );
}

export default App;
