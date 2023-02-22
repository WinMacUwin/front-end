import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { indigo } from "@mui/material/colors";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Form, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if entered username and password match the static user's credentials
    if (username === 'odedaram' && password === '123') {
      setIsAuthenticated(true);
      navigate('/DashBoard');
      // redirect to home screen after successful authentication
    } else {
      alert('Invalid username or password');
    }
  };

  return (
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: indigo[500] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">

            Login
          </Typography>
          {/* <Form component="form" onSubmit={handleSubmit}>
          
            <TextField
              className="textfield"
              color="primary"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Uwin Email Address"
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
        
            <FormControlLabel
              sx={{ alignItems: "left" }}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={setCurrentForm}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Form> */}

          {isAuthenticated ? (
        <p>Welcome, Static User!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </form>
      )}
        </Box>
  );
}
