import React, { useState } from 'react'
import { useLoginContext } from '../hooks/useLoginContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLoginContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login('', email, password);
  }
  return (
    <div>
      <form onSubmit={(e) => handleLogin(e)}>
        <input value={email} placeholder='email' type='email' onChange={(e) => setEmail(e.target.value)} />
        <input password={password} placeholder='password' type='text' onChange={(e) => setPassword(e.target.value)} />
        <button disabled={isLoading}>Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Login
