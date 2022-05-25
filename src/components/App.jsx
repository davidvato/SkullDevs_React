import React  from 'react';
import Loader from './Loader';
import Barra from './Barra';
import Asi_iniciamos from './Asi_iniciamos';
import Miembros from './Miembros';
import Imagen_header from './Imagen_header';
import Servicios from './Servicios';
import Contactanos from './Contactanos';


function App() {
  const [loader, setLoader] = React.useState(true);

  const didMount = () => {
    if (loader){
      setTimeout(() => {
        setLoader(false)
      }, 3000);
    }
  }
  React.useEffect(didMount, [])

  return (
    <div>
      {
        loader ? <Loader/> :
        <div>
          <Barra/>
          <Imagen_header/>
          <Asi_iniciamos/>
          <Miembros/>
          <Servicios/>
          <Contactanos/>
        </div>
      }
    </div>
  );
}

export default App;
