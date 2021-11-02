import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import doctor from '../../../images/doctor.png'
import appointment_bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const appointmentBanner = {
    background: `url(${appointment_bg})`,
    backgroundColor: 'rgba(45,58,74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '150px'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img
                        style={{ width: '400px', marginTop: '-120px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }} >
                    <Box>
                        <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 500, mb: 2, color: '#1CC6C3' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{ fontSize: 24, fontWeight: 600, my: 2, color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 12, fontWeight: 400, my: 2, color: 'white' }}>
                            Be cautious about your health. Take good care of your health. It's the most precious thing for a human being.
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#1CC6C3' }}>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;