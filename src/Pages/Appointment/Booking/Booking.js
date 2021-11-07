import { Button, Grid, Paper } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ py: 1 }} elevation={1}>
                    <Typography sx={{ fontSize: 20, color: '#1CC6C3' }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} variant="h5" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography sx={{ fontWeight: 300 }} variant="caption" display="block" gutterBottom>
                        {space} spaces available
                    </Typography>
                    <Button onClick={handleBookingOpen} sx={{ backgroundColor: '#1CC6C3' }} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                date={date}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;