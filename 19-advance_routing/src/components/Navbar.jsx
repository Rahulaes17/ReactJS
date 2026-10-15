import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-cyan-700 flex justify-between items-center px-6 py-7">
        <h2 className="text-4xl font-bold ">Lullipops</h2>
        <div className="flex gap-4 text-2xl font-bold">
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
