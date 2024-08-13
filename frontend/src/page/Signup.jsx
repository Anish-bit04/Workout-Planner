import React, { useState } from 'react'

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit=async (e)=>{
      e.preventDefault()
      const user = {email,password}
      const response = await fetch('http://localhost:4000/api/users/signup',{
        method:'POST',
        headers:{'Content-Type': 'application/json' },
        body:JSON.stringify({user})
      })
      const json = await response.json()
      if(json.ok){
        alert('User Signup up successfully')
      }
      else{
      }
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

export default Signup