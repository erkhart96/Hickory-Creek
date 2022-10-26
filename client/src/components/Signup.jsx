import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {TextField, Button, Alert} from '@mui/material'

function Signup() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    const handleCreateClick = (e) => {
        e.preventDefault();
        fetch('/signup', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({username, password}),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => console.log(user));
            navigate('/home')
          } else {
            res.json().then((err) => setError(err.error))
          }
        })
    }

  return (
    <>
    <div>
        <h1>Hickory Creek</h1>
        <p>Please create an account...</p>
    </div>
    <div>
        <TextField
            label="Username"
            value = {username}
            onChange = {(e) => setUsername(e.target.value)}/>
        <TextField
            label="Password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}/>
        <Button onClick={handleCreateClick}>Create Account</Button>
            <div> { error ? <Alert severity="error" key={error}>{error}</Alert>
            : null} </div>
    </div>
    </>
  )
}

export default Signup