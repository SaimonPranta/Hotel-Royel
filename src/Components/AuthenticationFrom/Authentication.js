//FireBase Sign In Email: mandraider@gmail.com
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { signUpHandler, writeUserData, logInHandler } from '../../Hooks/AuthenticationFunctions';
import useCurrentUser from '../../Hooks/useCurrentUser';
import { userContxt } from '../Home/Home';
import './Authentication.css';

const Authentication = () => {
    const [even, setEven] = useState({
        signIn: false,
        isPassword: false,
        isConfirmPassword: false,
        passwordFrom: false,
        firstStapSignUp: false,
        pathname: false,
        emailAndPasswordWarning: false,
        isValidUser: false
    });
    const [user, setUser] = useContext(userContxt)
    const [validInput, setValidInput] = useState({})
    const { currentUser } = useCurrentUser()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const fSize = location.pathname === "/login" ? "30px" : "-30px"
    const height = user.email ? "0" : "100%"

    const tempState = { ...even }
    useEffect(() => {
        setUser(currentUser)
        const newObj = { ...even }
        newObj.pathname = location.pathname === "/" || location.pathname === "/login" ? true : false
        setEven(newObj)
    }, [currentUser])

    const handleClick = () => {
        const newObj = { ...even }
        newObj.signIn = even.signIn ? false : true
        setEven(newObj)
    }

    const inputValidation = (e) => {
        const currentState = { ...even }
        const name = e.target.name
        const inputValue = e.target.value
        if (name === "username") {
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

    const firstSignUpBtn = (e) => {
        e.preventDefault()
        const currentState = { ...even }
        if (validInput.username && validInput.email && validInput.phoneNumber && validInput.message) {
            currentState.passwordFrom = currentState.passwordFrom ? false : true
            currentState["firstStapSignUp"] = true;
        }
        currentState["firstStapSignUp"] = true;

        setEven(currentState)
    }

    const singUpHandle = (e) => {
        e.preventDefault()
        const currentState = { ...even }
        if (validInput.email && validInput.password && validInput.confirmPassword) {
            signUpHandler(validInput.email, validInput.confirmPassword)
                .then(res => {
                    if (res.uid) {
                        writeUserData(res.uid, validInput.username, validInput.email, validInput.phoneNumber, validInput.confirmPassword, validInput.message)
                        setUser(validInput)
                        navigate(from, { replace: true })
                    }
                })
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

    const logIn = (e) => {
        e.preventDefault()
        const currentState = { ...even }
        logInHandler(validInput.email, validInput.password)
            .then(data => {
                currentState.isValidUser = !data.uid ? true : false
                setEven(currentState)
                console.log(data.uid, "got it")
            })
        currentState.emailAndPasswordWarning = validInput.email && validInput.password ? false : true
        setEven(currentState)
    }
    return (
        <div className='from-controler' id='signup' style={{ marginTop: fSize, height:height}}>
            {
                even.pathname && !user.email && !even.passwordFrom && !even.signIn && <form className='from' onSubmit={firstSignUpBtn}>
                    <input type="text" name="username" placeholder='Full Name' onChange={inputValidation} required/>
                    <input type="email" name="email" placeholder='Email' onChange={inputValidation} required />
                    <input type="text" name="phoneNumber" placeholder='Phone Number' onChange={inputValidation} required />
                    <textarea type="text" name="message" placeholder='Message' onChange={inputValidation} required/>
                    {
                        even.firstStapSignUp && <p className='note'>Note: You need to fill the full from.</p>
                    }
                    {/* <input type="submit" value="Submit" onClick={firstSignUpBtn} /> */}
                    <input type="submit" value="Submit" required/>

                    <p className='p'>Do you have a account? <strong onClick={handleClick}>Sign In</strong></p>
                </form>
            }

            {
                !user.email && even.passwordFrom && !even.signIn && <form className='from' onSubmit={singUpHandle}>
                    <input type="password" name="password" placeholder='Password' onBlur={warningHandler} onChange={inputValidation} required />
                    <input type="password" name="confirmPassword" placeholder='Confirm Password' onBlur={warningHandler} onChange={inputValidation} required />
                    {
                        even.isConfirmPassword && <p className='note'>Note: Confirm Password do not match.</p>
                    }
                    {
                        even.isPassword && <p className='note'>Note: Your password must be at least 6 characters long.</p>
                    }
                    {
                        even.enterPassword && !even.isPassword && <p className='note'>Note: Please enter password.</p>
                    }
                    {/* <input type="submit" value="Sign Up" onClick={singUpHandle} /> */}
                    <input type="submit" value="Sign Up" required />
                </form>
            }

            {
                !user.email && even.signIn && <form className='from' onSubmit={logIn}>
                    <input type="email" name="email" placeholder='Enter your Email' onChange={inputValidation} required/>
                    <input type="password" name="password" placeholder='Password' onChange={inputValidation} required />
                    {
                        even.emailAndPasswordWarning && <p className='note'>Note: Please enter your Email & Password.</p>
                    }
                    {
                       !even.emailAndPasswordWarning && validInput.email && validInput.password && even.isValidUser && <p className='note'>Note: Your Email / Password are invalid.</p>
                    }
                    {/* <input type="submit" value="Sign In" onClick={logIn} /> */}
                    <input type="submit" value="Sign In"/>


                    <p className='p'>Do't  you have a account? <strong onClick={handleClick}>Sign Up</strong></p>
                </form>
            }

        </div>
    );
};

export default Authentication;