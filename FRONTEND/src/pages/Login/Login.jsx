import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../../services/authService";
import '../Login/Login.css'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        WIKIZELDA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { email, password };
    console.log(formData)
    try {
      const result = await login(formData);
      if (result.result) {
        navigate('/profile');
      } else {
        setError(result.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main">
        <CssBaseline />
        
        <Grid>
          <Box>
            <img src='src/pages/Home/multimedia/welcome.png' />
            <br/>
            <textSignIn>
              <h1>Sign in to the Zelda world</h1>
            </textSignIn>
            <Box className="login-form" component="form" noValidate onSubmit={handleSubmit} >
              <TextField
                onChange={handleEmail}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={handlePassword}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}

            <br/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                
              >
                Sign In
              </Button>
              
  
              <orText>
                OR
              </orText>

              <Button
                type="button"
                fullWidth
                variant="contained"
                onClick={() => navigate('/signup')}
              >
                REGISTER
              </Button>
              <br />
              <br />

              
            </Box>
          </Box>
          <Copyright sx={{color:"white"}}/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
