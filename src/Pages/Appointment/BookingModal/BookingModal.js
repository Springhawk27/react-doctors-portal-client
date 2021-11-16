import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


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

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time, price } = booking;

    // new
    const { user } = useAuth();

    // new
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // alert('Submitted');
        // collect data and send to the database
        const appointment = {
            ...bookingInfo,
            serviceName: name,
            date: date.toDateString(),
            time,
            price,

        }
        // console.log(appointment);
        // send to the server
        fetch('https://hidden-scrubland-58450.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();

                }
            });
        // handleBookingClose();
        e.preventDefault();
    }



    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography sx={{ mb: 2 }} id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            label="Date"
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                            sx={{ width: '100%', mb: 1 }}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            label="Time"
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                            sx={{ width: '100%', my: 1 }}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            label="Name"
                            id="outlined-size-small"
                            name="patientName"
                            defaultValue={user.displayName}
                            onBlur={handleOnBlur}
                            placeholder="Your Name"
                            size="small"
                            sx={{ width: '100%', my: 1 }}
                        />
                        <TextField
                            label="Email"
                            id="outlined-size-small"
                            name="email"
                            defaultValue={user.email}
                            onBlur={handleOnBlur}
                            placeholder="Your Email"
                            size="small"
                            sx={{ width: '100%', my: 1 }}
                        />
                        <TextField
                            label="Phone Number"
                            id="outlined-size-small"
                            defaultValue=""
                            name="phone"
                            onBlur={handleOnBlur}
                            placeholder="Your Phone Number"
                            size="small"
                            sx={{ width: '100%', my: 1 }}
                        />
                        <Button type="submit" sx={{ backgroundColor: '#1CC6C3', mt: 1 }} variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;



