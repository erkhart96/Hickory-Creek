import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    
  return (
    <div>
    <div>Login</div>
        <div>
            <Link to={'/home'}>
                <button>Click to login...</button>
            </Link>
        </div>
    </div>
  )
}

export default Login