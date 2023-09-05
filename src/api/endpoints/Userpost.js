import React from 'react'

const Userpost = () => {

  const [username,setUsername] = React.useState('')
  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')

  return (
    <div>
      <input type="text" value={username} onChange= ></input>
    </div>
  )
}

export default Userpost