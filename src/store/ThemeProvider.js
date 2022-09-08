import { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({children}) {
    const [theme,setTheme] = useState(true)

    return ( 
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
     );
}

export default ThemeProvider;