import React from 'react'
import "./User_login.css"

const User_login = () => {
    return (
        <div id='body'>
            <div id="login_container">
                <form action="" id="log_in">
                    <p id="heading">Login</p>
                    <input type="email" id="email" placeholder="Email-address" required></input><br></br>
                    <input type="password" id="pass" placeholder="Password" required></input><br></br>
                    <input type="submit" name="" value="Log in" id="submitBtn"></input><br></br>
                    <div id="signupPrompt">Don't have an account? <span id='span'>Signup</span></div>
                </form>
            </div>
        </div>
    )
}

export default User_login
