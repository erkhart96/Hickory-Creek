import { Button, Container, Link } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };

  return (
    <Container>
      <h1>Hickory Creek</h1>
      <p>A text adventure game made in the spirit of halloween!</p>
      <p>Created with Ruby on Rails, React, Postgresql</p>
      <h3>Created by: Ben Erkhart</h3>
      <Link href="http://www.github.com/erkhart96">GitHub</Link>
      <br></br>
      <br></br>
      <Link href="https://www.linkedin.com/in/ben-erkhart/">LinkedIn</Link>
      <br></br>
      <br></br>
      <Button variant="contained" onClick={handleHome}>
        Go home
      </Button>
    </Container>
  );
}

export default About;
