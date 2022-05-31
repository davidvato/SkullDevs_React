import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";

import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CodeIcon from '@mui/icons-material/Code';
import RepeatIcon from '@mui/icons-material/Repeat';

import { Typography, Grid, Box } from "@mui/material";

export default function Servicios() {
  return (
    <Grid container id="services">
      <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <h1>Servicios</h1>
          </Box>
      </Grid>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h4" component="span">
            Consultoria
          </Typography>
          <Typography>La consultoría de software se utiliza a menudo cuando una empresa necesita asesoramiento sobre sus decisiones técnicas. Los consultores pueden proporcionar una solución de software integral ayudando durante todo el proceso de desarrollo de software.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h4" component="span">
            Web Development
          </Typography>
          <Typography>Un desarrollador web crea sitios web utilizando varios lenguajes de programación. Sus responsabilidades incluyen el diseño de páginas web y el desarrollo de la funcionalidad del sitio para satisfacer las necesidades de los usuarios.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <PhoneIphoneIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h4" component="span">
            Mobile Development
          </Typography>
          <Typography>El desarrollo mobile es la especialización que permite a desarrolladores y programadores compartir su pasión con el mundo a través de la creación de aplicaciones nativas para iOS y Android.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h4" component="span">
            Marketing Digital
          </Typography>
          <Typography>El Marketing Digital, también llamado mercadotecnia online o mercadeo en línea, se define como una forma de marketing que utiliza los nuevos medios y canales publicitarios tecnológicos y digitales como internet, el móvil o el IoT.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Grid>
  );
}
