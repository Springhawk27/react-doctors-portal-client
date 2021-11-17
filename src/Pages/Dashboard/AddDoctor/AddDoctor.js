import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);



    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {

            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);



        fetch('https://hidden-scrubland-58450.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // console.log('Success:', data);
                if (data.insertedId) {
                    // console.log('Doctor added successfully');
                    setSuccess('Doctor added successfully');

                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h2>Add a Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%', mb: 2 }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant="standard" />
                <br />
                <br />
                <Input sx={{ width: '50%' }}
                    accept="image/*"
                    // accept="image/png,  image/jpg"
                    // multiple type="file" />
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>

            </form>
            {success && <p>{success}</p>}
        </div>
    );
};

export default AddDoctor;