import { useNavigate } from "react-router-dom"

const Navigation = () => {

    let navigate = useNavigate();

  return (
    <div className="flex bg-cyan-700 py-1 px-5">
      <button
        onClick={() => { navigate('/')}}
        className="bg-amber-500 px-5 py-2 font-medium rounded m-2 cursor-pointer active:scale-95">
        Return to Home Page
      </button>
      <button
        onClick={() => { navigate(-1)}}
        className="bg-amber-500 px-5 py-2 font-medium rounded m-2 cursor-pointer active:scale-95">
        Prev
      </button>
      <button
        onClick={() => { navigate(+1)}}
        className="bg-amber-500 px-5 py-2 font-medium rounded m-2 cursor-pointer active:scale-95">
        Next
      </button>
    </div>
  )
}

export default Navigation
