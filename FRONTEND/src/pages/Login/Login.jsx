import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { login } from "../../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    const formData = {
      email,
      password,
    };

    const result = await login(formData);
    console.log(result);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1 style={{ width: "100px" }}>Login</h1>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
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

        <Button onClick={handleSubmit} variant="contained">
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
