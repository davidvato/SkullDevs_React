import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Asi_iniciamos = () => {
    return (
        <div id="beginning">
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <h1>Asi Iniciamos...</h1>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                        <p>SkullDevs comienza como una idea "Pandemica", esto en una noche de Mayo del año 2020. Sentados (El Mr Hugo y yo) en un sofa, coincidimos en (Al fiiin!!, despues de años) realizar un emprendimiento 
                        de un negocio-proyecto-hobbie, el cual tuviera que ver con nuestra experiencia profesional y que fuese divertido.
                        <br></br>
                        <br></br>
                        Las noches siguientes, iniciamos con lluvia de ideas y la fase creativa de "Como sera nuestro Logo?...Que representaria para el negocio?...", con una de las tantas habilidades de "El Mr" (Diseño), llegamos a la conclusion
                        de un "Craneo" (Skull); el cual representara "El inicio del proyecto, de un codigo, etc...".</p>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                        <p>Despues de muchas pruebas, ajustes, desveladas y cambios de ultimo minuto (Por nuestras indecisiones), llegamos al fin del diseño del logo e iniciamos el camino de "Y ahora que nombre tendremos?...".
                        <br></br>
                        <br></br>
                        Paseando al Cooper (El perritu) surgio la idea del nombre "SKULLDEVS", y nuevamente entramos a la fase de diseño para poder integrarlo al logo. De igual manera, despues de varios intentos, logramos nuestro proposito.
                        Y de esta manera dimos nuestro "Banderazo" para comenzar la captacion de clientes.</p>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Asi_iniciamos;