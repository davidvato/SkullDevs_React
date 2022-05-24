import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Contactanos = () => {
    const [formStatus, setFormStatus] = React.useState("");
    const [formStatusSeverity, setFormStatusSeverity] = React.useState("");
    const [toastOpen, setToastOpen] = React.useState(false);

    const handleToastClose = () => {
        setToastOpen(false)
    }

    const formSubmit = (event) => {
        event.preventDefault();
        
        var data = new FormData(event.target);
        fetch("https://formspree.io/f/xayvdkay", {
            method: "POST",
            body: data,
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
        });

        document.getElementById("my-form").reset();
    }

    return (
        <div id="contact">
            <Grid container >
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <h1>Contactanos</h1>
                    </Box>
                </Grid>
               
                <div className="contact-content" >
                    <form onSubmit={formSubmit} id="my-form">                    
                        <label id="texto">Email:</label>
                        <input id="campos" type="email" name="email" />
                        <label id="texto">Message:</label>
                        <input id="campos" type="text" name="message" />
                        <button id="submit" type="submit">Submit</button>
                    </form>
                 </div>
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