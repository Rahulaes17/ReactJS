import { useState } from "react"

const App = () => {

  const [admin , setAdmin] = useState({user:'Rahul', age:21});
  const [manager , setManager] = useState(['stickers, ', 'trip, ', 'payments, '])

  const btnClicked = () => {
    const newAdmin = {...admin};
    const newManager = ['Hygeine, ', 'Sahil, ' , 'Ashish, ', 'Piyush, '];
    newAdmin.user = 'Rohit';
    newAdmin.age = 20;
    setAdmin(newAdmin);
    setManager(newManager)
  }

  return (
    <div>
      <h1>The user is {admin.user} <br /></h1> 
      <h1>his age is {admin.age} <br /> </h1>
      <h1>{admin.user} manages: {manager}</h1>
      <button onClick={btnClicked}>Admin 2</button>
    </div>
  )
}

export default App
