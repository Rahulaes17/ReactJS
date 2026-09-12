import { useState } from "react";

const App = () => {

  const[title, setTitle] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted by' , title);
    setTitle('');
  }

  return (
    <div>
    <form onSubmit={submitHandler}>
      <input 
        type="text" 
        placeholder="Enter Your Name" 
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }} />
      <button>submit</button>
      </form>
    </div>
  )
}

export default App