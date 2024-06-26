import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { signUp } from "../../services/authService";
import "../SignUp/SignUp.css"; // Import the CSS file for styles
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const formData = {
      name, email, password
    }

    const result = await signUp(formData)
    navigate('/profile')
    console.log(result)
  }

  return (
    <Box className="SignUp-container">
      <h1 className="SignUp-title">SignUp</h1>
      <Box className="SignUp-form">
        <label className="SignUp-label">
          <TextField
            onChange={(e) => handleName(e)}
            className="SignUp-textField"
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
        </label>
        <label className="SignUp-label">
          <TextField
            onChange={(e) => handleEmail(e)}
            className="SignUp-textField"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
          />
        </label>
        <label className="SignUp-label">
          <TextField
            onChange={(e) => handlePassword(e)}
            className="SignUp-textField"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
        </label>
          <Button onClick={handleSubmit} className="SignUp-button" variant="contained">
            Register
          </Button>
      </Box>
    </Box>
  );
}

export default SignUp;
