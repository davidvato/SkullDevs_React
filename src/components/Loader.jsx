import * as React from 'react';
import '../css/index.css';

const Loader = () => {
  return (
      <div id="preloader">
          <div id="status"><img src={require('./../images/icono.ico')} alt=""/>
          </div>
      </div>
  )
}

export default Loader;