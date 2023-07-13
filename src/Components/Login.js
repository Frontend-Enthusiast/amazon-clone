import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const register = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password).then((auth) => {
            if (auth) {
                navigate('/');
            }
        }).catch((error) => alert(error));
    }
    const signIn = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password).then((auth) => {
            navigate('/');
        }).catch((error) => alert(error));
    }
    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''></img>
            </Link>
            <div className='login__conatiner'>
                <h1>Sign-In</h1>
                <form>
                    <h5>Email:</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password:</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign-In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login