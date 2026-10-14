
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>Navbar</h2>
      <div className='page'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
