import React from 'react';

const Login = props => {
  return (
    <div>
      <h1>Please log in</h1>
      <button onClick={() => props.login()}>Login</button>
    </div>
  )
}

export default Login;