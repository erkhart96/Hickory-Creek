import React from "react";
import { Button, TextField, Alert, Container } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => console.log(user));
        navigate("/home");
      } else {
        res.json().then((err) => setError(err.error));
      }
    });
  };

  const createAccountClick = () => {
    navigate("/signup");
  };

  return (
    <Container sx={{ display: "flex", margin: "300px" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1>Hickory Creek</h1>
        <p>Please log in...</p>
        <div>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLoginClick}>Login</Button>
          <div>
            {" "}
            {error ? (
              <Alert severity="error" key={error}>
                {error}
              </Alert>
            ) : null}{" "}
          </div>
        </div>
        <div>
          <p>OR create an account</p>
          <Button onClick={createAccountClick}>Create Account</Button>
        </div>
      </Container>
    </Container>
  );
}

export default Login;
