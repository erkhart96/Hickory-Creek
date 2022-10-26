import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'



function Login() {

  return (
    <div>
    <div>Login</div>
        <div>
            <Link to={'/home'}>
                <Button variant='contained'>Login</Button>
            </Link>
        </div>
    </div>
  )
}

export default Login