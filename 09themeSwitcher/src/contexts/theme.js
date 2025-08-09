import {createContext, useContext} from 'react';


//giving default values
export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: () =>{},
    lightTheme: () =>{},
});


//WE CAN WRITE PROVIDER FUNCTION HERE ONLY

export const ThemeProvider= ThemeContext.Provider


export default function useTheme(){
    return useContext(ThemeContext)
}