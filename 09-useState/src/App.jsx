import { useState } from "react"

const App = () => {

  const [name,setName] = useState('Heyyyyy i am??');

  function showName(){
    setName('Rahul');
  }

  return (
    <div className="main">
      <h1>{name}</h1>
      <button onClick={showName} className="btn">Know</button>
    </div>
  )
}

export default App
