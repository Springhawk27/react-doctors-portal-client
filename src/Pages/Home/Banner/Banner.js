import React from 'react';

import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';


const bannerBg = {
    background: `url(${bg})`,
};

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
    // border: '1px solid red'
}



const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, my: 8 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h4">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 300, my: 2, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum laboriosam aliquid deleniti iure dolorum quod explicabo ipsum dicta corporis?
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#1CC6C3' }}>
                            Get Appointment
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container >

    );
};

export default Banner;