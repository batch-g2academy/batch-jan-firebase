import React, { useState } from 'react'
import { auth } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import GoogleButton from 'react-google-button'

export default function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  

  const login = async (e) => {
    e.preventDefault();
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log("-------");
        console.log(user);
    } catch(err) {
        console.log("err: ");
        console.log(err);
    }
  }

  const loginWithGoogle = async (e) => {
    e.preventDefault();
    try {
        console.log("mau login pake google");
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);

        console.log(user);
    } catch(err) {
        console.log(err);
    }
    
  }

  return (
    <div>
        <form>
            <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={login}>Login</button>
            <GoogleButton onClick={loginWithGoogle}></GoogleButton>
        </form>
    </div>
  )
}
