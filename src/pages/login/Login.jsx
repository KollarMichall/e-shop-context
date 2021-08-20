import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'
import './login.styles.scss'


const Login = () => {
    return (
        <div className="login">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Login
