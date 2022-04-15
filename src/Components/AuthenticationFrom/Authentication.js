//FireBase Sign In Email: mandraider@gmail.com
import React, { useState } from 'react';
import { signUpHandler } from '../../Hooks/AuthenticationFunctions';
import './Authentication.css';

const Authentication = () => {
    const [even, setEven] = useState({
        signIn: false,
        isPassword: false,
        isConfirmPassword: false,
        passwordFrom: false
    });
    const [user, setUser] = useState({})
    const [validInput, setValidInput] = useState({})
    const handleClick = () => {
        const newObj = {
            signIn: even.signIn ? false : true
        }
        setEven(newObj)
    }

    const inputValidation = (e) => {
        const currentState = { ...even }
        const name = e.target.name
        const inputValue = e.target.value
        if (name === "name") {
            validInput[name] = inputValue
        }
        if (name === "email") {
            if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(inputValue)) {
                let lowerCaseEmail = inputValue.toLowerCase()
                validInput[name] = lowerCaseEmail
            } else {
                validInput[name] = ''
            }
        }
        if (name === "password") {
            currentState['enterPassword'] = false
            if (/^.{5,16}$/.test(inputValue)) {
                validInput[name] = inputValue
            } else {
                validInput[name] = ''
            }
        }
        if (name === "confirmPassword") {
            if (validInput.password === inputValue) {
                validInput[name] = inputValue
            } else (
                validInput[name] = ''
            )
        }
        if (name === "phoneNumber") {
            if (inputValue.length >= 11) {
                validInput[name] = inputValue
            } else {
                validInput[name] = ''
            }
        }
        if (name === "message") {
            validInput[name] = inputValue
        }
        setEven(currentState)
        // setValidInput(currentInput)
        console.log(validInput)
    }

    const warningHandler = (e) => {
        const currentState = { ...even }
        const name = e.target.name
        const inputValue = e.target.value
        if (name === 'password' && inputValue.length < 5) {
            currentState['isPassword'] = true
        }
        if (name === 'password' && inputValue.length >= 5) {
            currentState['isPassword'] = false
        }
        if (name === 'confirmPassword') {
            if (validInput.password !== validInput.confirmPassword) {
                currentState['isConfirmPassword'] = true
            }
            if (validInput.password === validInput.confirmPassword) {
                currentState['isConfirmPassword'] = false
            }
        }
        if (e.target.type === 'submit') {
            if (validInput.password !== validInput.confirmPassword) {
                currentState['isConfirmPassword'] = true
            }
        }


        setEven(currentState)
    }

    const firstSignUpBtn = () => {
        const currentState = { ...even }
        if (validInput.name && validInput.email && validInput.phoneNumber) {
            currentState.passwordFrom = currentState.passwordFrom ? false : true
        }
        setEven(currentState)
    }

    const singUpHandle = (e) => {
        const currentState = { ...even }
        if (validInput.email && validInput.password && validInput.confirmPassword) {
            console.log('fireBase method call')
            signUpHandler(validInput.email, validInput.confirmPassword)
                .then(res => console.log(res))
        }
        if (e.target.type === 'submit') {
            if (!validInput.password) {
                currentState['enterPassword'] = true
            }
            if (validInput.password) {
                currentState['enterPassword'] = false
                console.log('enter here')
            }
        }

        setEven(currentState)
    }
    return (
        <div className='from-controler' id='signup'>
            {
                !even.passwordFrom && !even.signIn && <from className=''>
                    <input type="text" name="name" placeholder='Full Name' onChange={inputValidation} />
                    <input type="email" name="email" placeholder='Email' onChange={inputValidation} />
                    <input type="text" name="phoneNumber" placeholder='Phone Number' onChange={inputValidation} />
                    <textarea type="text" name="message" placeholder='Message' onChange={inputValidation} />
                    <input type="submit" value="Sign Up" onClick={firstSignUpBtn} />

                    <p>Do you have a account? <strong onClick={handleClick}>Sign In</strong></p>
                </from>
            }

            {
                even.passwordFrom && !even.signIn && <from className=''>
                    <input type="password" name="password" placeholder='Password' onBlur={warningHandler} onChange={inputValidation} />
                    {
                        even.isPassword && <p>Your password must be at least 6 characters long</p>
                    }
                    <input type="password" name="confirmPassword" placeholder='Confirm Password' onBlur={warningHandler} onChange={inputValidation} />
                    {
                        even.isConfirmPassword && <p>Confirm Password do not match</p>
                    }
                    {
                        even.enterPassword && <p>Note: Please enter password</p>
                    }
                    <input type="submit" value="Sign Up" onClick={singUpHandle} />
                </from>
            }

            {
                even.signIn && <from className=''>
                    <input type="email" placeholder='Enter your Email' />
                    <input type="password" placeholder='Password' />
                    <input type="submit" value="Sign In" />
                    <p>Do't  you have a account? <strong onClick={handleClick}>Sign Up</strong></p>
                </from>
            }

        </div>
    );
};

export default Authentication;