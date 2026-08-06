import { useState } from "react"

const App = () => {

  const[num, setNum] = useState(0);

  function incNum(){
    setNum(num+1);
  }

    function decNum(){
    setNum(num-1);
  }

    function incNum10(){
    setNum(num+10);
  }

    function decNum10(){
    setNum(num-10);
  }

  return (
    <div className=" bg-blue-200 h-screen flex flex-col justify-center items-center gap-8">
      <div className="bg-black text-white h-50 w-70 flex items-center justify-center rounded-full text-7xl">{num}</div>
      <div className="flex gap-5 ">
        <button onClick={incNum} className="bg-gray-700 h-30 w-30 rounded-4xl text-5xl text-zinc-200">+1</button>
        <button onClick={decNum} className="bg-gray-700  h-30 w-30 rounded-4xl text-5xl text-zinc-200">-1</button>
        <button onClick={incNum10} className="bg-gray-700  h-30 w-30 rounded-4xl text-5xl text-zinc-200">+10</button>
        <button onClick={decNum10} className="bg-gray-700  h-30 w-30 rounded-4xl text-5xl text-zinc-200">-10</button>
      </div>
    </div>
  )
}

export default App
