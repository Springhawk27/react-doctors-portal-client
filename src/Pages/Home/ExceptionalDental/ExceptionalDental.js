import React from 'react';

import treatment from '../../../images/treatment.png';

import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
    // border: '1px solid red'
}

const ExceptionalDental = () => {
    return (
        <Container sx={{ flexGrow: 1, my: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} style={verticalCenter} sx={{ mb: 8 }} >
                    <img style={{ height: '100%' }} src={treatment} alt="" />
                </Grid>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={8} sx={{ mb: 8 }}>
                    <Box>
                        <Typography variant="h4">
                            Exceptional Dental <br />
                            Care, on Your Terms
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 300, my: 2, color: 'gray' }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, praesentium laboriosam consectetur facilis saepe consequuntur debitis, quis, expedita aut ipsa cum harum. Fuga dolorum ea nam incidunt cupiditate possimus quibusdam, doloremque nihil. Perspiciatis ducimus, voluptates saepe dolorem, delectus iusto magnam eligendi similique iste eveniet eos reprehenderit laudantium, porro velit praesentium cupiditate. Repellat nemo cum reprehenderit id a? In qui soluta perferendis, quam a maxime laboriosam! Laboriosam, repudiandae sunt? Explicabo ratione recusandae doloribus facilis excepturi quibusdam delectus porro, fuga, temporibus autem impedit. Maxime iste voluptatibus et quia repudiandae, ad officia ipsa corporis perferendis? Tempore recusandae harum dignissimos. Ut quisquam officiis rem!
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#1CC6C3' }}>
                            Get Appointment
                        </Button>
                    </Box>
                </Grid>


            </Grid>
        </Container >
    );
};

export default ExceptionalDental;