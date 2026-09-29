const App = () => {

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

    const data = await response.json();
    console.log(data)
    console.log(response)
  }


  return (
    <div>
      <button onClick={getData}>GetData</button>
    </div>
  )
}

export default App
