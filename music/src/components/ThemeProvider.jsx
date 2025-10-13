import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";


export const ThemeProvider = ({children})=>{

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {(theme === 'light') ? setTheme('dark') : setTheme('light')}

    // Aplicar el tema al body cuando cambie
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    )
}

export default ThemeProvider

