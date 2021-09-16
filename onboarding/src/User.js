import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.first_name} {details.last_name}</h2>
      <p>Email: {details.email}</p>
      <img src={details.avatar} alt={details.first_name}></img>
      

    </div>
  )
}

export default User
