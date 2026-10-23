import { useContext } from "react"
import { themeContext } from "./Context";

const Nav2 = () => {

    const [theme,setTheme] = useContext(themeContext);

  return (
    <div className="nav2">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>{theme}</h4>
    </div>
  )
}

export default Nav2
