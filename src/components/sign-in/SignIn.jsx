import React, { Component } from 'react'
import FormInput from '../form-input/FormInput'
import './sign-in.styles.scss'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

    }
    handelSubmit = e => {
        e.preventDefault()
        this.setState({ email: '', password: ''})
    }
    handleChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        this.setState({ [name]: value})
    }


    render() {
        return (
            <div className='sign-in'>
                <h2>I alredy have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput handleChange={this.handleChange} name='email' label='Email' value={this.email} type='email' required/>

                    <FormInput handleChange={this.handleChange} name='password' label='Password' value={this.password} type='password'/>

                    <input type="submit" value="Submit Form"/>
                </form>

            </div>
        )
    }
}



export default SignIn