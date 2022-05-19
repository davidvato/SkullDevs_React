import React, { useEffect }  from 'react';

function Carga_Loader() {
  useEffect(() => {
    fadeOutEffect("status");
    setTimeout(() => {
     fadeOutEffect("preloader");
     document.body.style.overflow = "visible";
    }, 1000);
  }, []);

  const fadeOutEffect = (target) => {
    var fadeTarget = document.getElementById(target);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
  }

  return (
    <div id="preloader">
        <div id="status">&nbsp;</div>
    </div>
  );
}

export default Carga_Loader;
