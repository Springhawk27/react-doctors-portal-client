import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {

        // alert('Submitted');
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 12 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: "75%", m: 1, backgroundColor: "#1CC6C3" }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/register">
                            <Button
                                variant="text">New User? Please Register</Button>

                        </NavLink>
                        <br />
                        {isLoading && <CircularProgress />
                        }
                        {user?.email && <Alert severity="success">Logged In successfully</Alert>
                        }
                        {authError && <Alert severity="error">{authError}</Alert>
                        }
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;