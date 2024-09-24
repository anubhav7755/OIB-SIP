import React from 'react'

function Home() {
  const user= sessionStorage.getItem(email);
  return (
    <div>Home Component
      <p>{user}</p>
    </div>
    
  )
}

export default Home;