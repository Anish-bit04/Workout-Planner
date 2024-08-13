import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(email,password)
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label >Password:</label>
        <input type="text" value={password} onChange={e =>setPassword(e.target.value)} />
    </form>
    </div>
  )
}

export default Login