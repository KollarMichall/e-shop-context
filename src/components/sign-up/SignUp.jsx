
import React, { Component } from 'react'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import { auth, createUseProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    }
    handelSubmit = async e => {
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert("password don't match")
            return
            
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

           await createUseProfileDocument(user, {displayName})
        } catch (error) {
            console.error(error)
        }
        this.setState({ displayName:'', email: '', password: '', confirmPassword: ''})
    }
    handleChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        this.setState({ [name]: value})
    }


    render() {
        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handelSubmit}>
                    <FormInput handleChange={this.handleChange} name='displayName' label='Display Name' value={this.displayName} type='text' required/>
                    <FormInput handleChange={this.handleChange} name='email' label='Email' value={this.email} type='email' required/>

                    <FormInput handleChange={this.handleChange} name='password' label='Password' value={this.password} type='password' />
                    <FormInput handleChange={this.handleChange} name='confirmPassword' label='Confirm Password' value={this.confirmPassword} type='password' />
                   
                  
                        <CustomButton type="submit" value="Submit Form">Sign Up</CustomButton>
          
                </form>

            </div>
        )
    }
}



export default SignUp