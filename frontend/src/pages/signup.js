import React, { useState } from 'react'
import { useSignupContext } from '../hooks/useSignupContext'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, isLoading } = useSignupContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password);
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={username} placeholder='username' type='text' onChange={(e) => setUsername(e.target.value)} />
        <input value={email} placeholder='email' type='email' onChange={(e) => setEmail(e.target.value)} />
        <input password={password} placeholder='password' type='text' onChange={(e) => setPassword(e.target.value)} />
        <button disabled={isLoading}>Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Signup
