import { useContext } from "react"
import Nav2 from "./Nav2"
import { themeContext } from "./Context"

const navbar = () => {
  const  [theme] = useContext(themeContext);
  return (
    <div className={theme}>
        <h2>Rahul's</h2>
        <Nav2 />
    </div>
  )
}

export default navbar
