import { createContext, useState } from "react"

export const themeContext = createContext();

const Context = (props) => {

   const[theme, setTheme] =  useState("light");

  return (
    <div>
      <themeContext.Provider value={[theme, setTheme]} >
        {props.children}
      </themeContext.Provider >
    </div>
  )
}

export default Context
