import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';

import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt ab at magni animi deleniti temporibus fugit neque aliquam nam!',
        img: fluoride,
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt ab at magni animi deleniti temporibus fugit neque aliquam nam!',
        img: cavity,
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt ab at magni animi deleniti temporibus fugit neque aliquam nam!',
        img: whitening,
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontSize: 18, fontWeight: 400, m: 2, color: '#1CC6C3' }} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 3 }} variant="h4" component="div">
                    SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {

                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;