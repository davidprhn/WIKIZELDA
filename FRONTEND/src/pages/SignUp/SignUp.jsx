import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { signUp } from "../../services/authService";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    console.log(result)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1 style={{ width: "100px" }}>SignUp</h1>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <label>
          Name:
          <TextField
            onChange={(e) => handleName(e)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
        </label>
        <label>
          {" "}
          Email:
          <TextField
            onChange={(e) => handleEmail(e)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
          />
        </label>
        <label>
          {" "}
          Password:
          <TextField
            onChange={(e) => handlePassword(e)}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
        </label>
        <Link to="/profile">
          <Button onClick={handleSubmit} variant="contained">
            Register
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default SignUp;
