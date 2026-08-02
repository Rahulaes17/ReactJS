const App = () => {

  function btnclicked(){
    console.log('button clicked');
  }

  return (
    <div>
      <h1>YOOO wassup mittar???</h1>
      <button onClick={btnclicked}>touch me</button>

      <button onChange={(elem) => {
            console.log('User is typing: ', elem.target.value)
          }} >
        <input type="text" placeholder="Enter your Name" />
      </button>
    </div>
  )
}

export default App
