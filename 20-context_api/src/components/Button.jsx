import { useContext } from "react"
import { themeContext } from "./Context";


const Button = () => {
    const [theme, setTheme] = useContext(themeContext);
    const themeChange = () => {
        setTheme('dark');
    }
    return (
        <div>
            <button onClick={themeChange}>
                Change Theme
            </button>
        </div>
    )
}

export default Button
