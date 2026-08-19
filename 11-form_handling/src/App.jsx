const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  }

  return (
    <div>
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Enter Your Name" />
      <button>submit</button>
      </form>
    </div>
  )
}

export default App
