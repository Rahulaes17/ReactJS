import axios from "axios";
const App = () => {

 /* const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

    const data = await response.json();
    console.log(data)
    console.log(response)
  }*/

  //using axios


  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    console.log(response.data)
    
  }

  return (
    <div>
      <button onClick={getData}>GetData</button>
    </div>
  )
}

export default App
