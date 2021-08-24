import React from 'react'
import './Login.css'


const Login = () => {
  return (
    <React.Fragment>
    <div className="container">
      <div className="login-left">
        <h2>Get Started</h2>
        <br/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eius quidem in blanditiis quasi consequatur, laudantium officiis nam praesentium perspiciatis architecto itaque non, debitis facere exercitationem illum incidunt adipisci accusamus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eius quidem in blanditiis quasi consequatur, laudantium off
        </p>
        <br/>
        <button type="button" class="btn btn-primary btn-lg btn-block">Sign Up</button>
        <br/>
        <button type="button" class="btn btn-primary btn-lg btn-block">Login</button>
      </div>

      <div className="login-right">
        <img src="https://images.unsplash.com/photo-1618588507085-c79565432917?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Login
