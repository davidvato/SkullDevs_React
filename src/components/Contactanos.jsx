import React, { useState } from "react";
import { Button, TextField, Grid, Box, Snackbar, Alert } from "@mui/material";
import '../css/index.css';

const Contactanos = () => {
    
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [mensajeError, setMensajeError] = useState(false)
    const [formStatus, setFormStatus] = React.useState("");
    const [formStatusSeverity, setFormStatusSeverity] = React.useState("");
    const [toastOpen, setToastOpen] = React.useState(false);

    const handleToastClose = () => {
        setToastOpen(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setEmailError(email == '')
        setMensajeError(mensaje == '')

        if (email == "" || mensaje == "") {
            return
        }

        fetch("https://formspree.io/f/xayvdkay", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                message: mensaje
            }),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                setFormStatusSeverity("success");
                setFormStatus("Gracias por tu informacion, en un momento te contactamos.");
            } else {
                setFormStatusSeverity("error");
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        setFormStatus(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        setFormStatus("Oops! Hubo un problema enviando tu informacion.");
                    }
                })
            }
            setToastOpen(true);
        }).catch(error => {
            setFormStatusSeverity("error");
            setFormStatus("Oops! Hubo un problema enviando tu informacion.");
            setToastOpen(true);
        }).finally(() => {
            document.getElementById("my-form").reset();
        });
    }

    return (
        <div id="contact">
            <Grid container >
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <h1>Contactanos</h1>
                    </Box>
                </Grid>
            <form id="my-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                onChange={(event) => setEmail(event.target.value)}
                id="field"
                label="Email"
                variant="outlined"
                color="secondary"  
                size= 'medium'              
                required
                error={emailError}
                />
                <TextField
                onChange={(event) => setMensaje(event.target.value)}
                id="field"
                label="Mensaje"
                variant="outlined"
                color="secondary"
                required
                error={mensajeError}
                />
                <Button
                type="submit"
                color="secondary"
                variant="contained">Enviar</Button>
            </form>
            <Snackbar open={toastOpen} autoHideDuration={6000} onClose={handleToastClose}>
                    <Alert severity={formStatusSeverity} sx={{ width: '100%' }} onClose={handleToastClose}>
                        {formStatus}
                    </Alert>
                </Snackbar>
            
        </Grid>
        </div>
        

    )
}

export default Contactanos;