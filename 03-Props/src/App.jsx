import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Rahul Joshi' img = 'https://images.pexels.com/photos/36851845/pexels-photo-36851845.jpeg' />
      <Card user='Ashish Shaw' img = 'https://images.pexels.com/photos/38344097/pexels-photo-38344097.jpeg'/> 
      <Card user='Rohit Rajabhoj' img = 'https://images.pexels.com/photos/36499418/pexels-photo-36499418.jpeg'/> 
      <Card user='Sahil Sharma' img = 'https://images.pexels.com/photos/38354247/pexels-photo-38354247.jpeg'/> 
    </div>
  )
}

export default App
