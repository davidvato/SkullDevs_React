import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Miembros() {
  const [openHugoModal, setOpenHugoModal] = React.useState(false);
  const handleOpenHugoModal = () => setOpenHugoModal(true);
  const handleCloseHugoModal = () => setOpenHugoModal(false);

  const [openDavidModal, setOpenDavidModal] = React.useState(false);
  const handleOpenDavidModal = () => setOpenDavidModal(true);
  const handleCloseDavidModal = () => setOpenDavidModal(false);

  return (
    <div id="members">
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                   <h1>Miembros</h1>
                </Box>
            </Grid>

            <Grid item xs={6}  sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('./../images/hugo.png')} alt=""/>
            </Grid>

            <Grid item xs={6}  sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('./../images/david.png')} alt=""/>
            </Grid>


            <Grid item xs={6} sx={{ marginTop: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <Button onClick={handleOpenHugoModal} variant="outlined">Hugo Bribiesca Balboa</Button>
                        <Modal
                            open={openHugoModal}
                            onClose={handleCloseHugoModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description">
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Hugo Bribiesca Balboa
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Soy Desarrollador en Sistemas desde el Años de experiencia con diferentes proyectos y modelos de negocios ayudando a diferentes
                                    empresas a desarrollar sus productos como; CRM para Agencias de Viajes (sistema de ventas y comisiones), CRM online para
                                    inmobiliarias (seguimiento de clientes), websites (sitios responsivos), e-commerce (woocommerce, prestashop, magento, shopify)
                                    con tecnologías: PHP, Javascript, Jquery, HTML5, CSS3, Java, React-Native, Node.js, MySQL, ES6, Redux.js, Firebase, Centos,
                                    Postman, Babel, Git, IoT (Internet of Things), API´s, JSON, Bootstrap 4, Wordpress.
                                    Analista y Diseñador de sistemas, implementando diferentes tecnologías para desarrollar la metodologia de trabajo de acuerdo a las
                                    necesidades del cliente, creando un MVP y sus versiones siguientes, optimizando el mantenimiento de los sistemas para sus futuras
                                    actualizaciones.
                                </Typography>
                            </Box>
                        </Modal>
                    </Box>
            </Grid>

            <Grid item xs={6} sx={{ marginTop: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                    <Button onClick={handleOpenDavidModal} variant="outlined">David Vargas Torres</Button>
                    <Modal
                        open={openDavidModal}
                        onClose={handleCloseDavidModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                David Vargas Torres
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Experience in services Helpdesk, Service Desk, technical support to computer equipment and software,
                                Android Tablet support equipment, testing of user level android application, installation and maintenance of networks,
                                management of production level environments, development and testing, management database, server installation and maintenance,
                                and planning improvements to these services. Data analysis for the area of Guarantees, data reporting, negotiation with customers.
                                Reporting management on weekly basis.
                            </Typography>
                        </Box>
                    </Modal>
                </Box>
            </Grid>
        </Grid>
    </div>
  );
}