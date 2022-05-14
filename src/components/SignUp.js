import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const signUp = async (e) => {
      e.preventDefault();
      try {
        console.log("coba sign up");
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);
      } catch(err) {
          console.log(err);
      }
    
  }

  return (
    <div>
        <form>
            <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={signUp}>SIGN UP</button>
        </form>
    </div>
  )
}
