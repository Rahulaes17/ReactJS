
const App = () => {
  localStorage.setItem('user',"Rahul")
  console.log(localStorage.getItem('user'))

  const user = {
    customerName: 'Rohit',
    age: 21,
    city: 'Bhopal'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const cust1 = JSON.parse(localStorage.getItem('user'))
  console.log(cust1)

  localStorage.clear()

  return (
    <div>
      <h1>YOKOSO! <br /> <br /><br />WATASHI NO SOUL SOCIETY....</h1>
    </div>
  )
}

export default App
