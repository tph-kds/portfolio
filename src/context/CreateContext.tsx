import React, { FC, ReactNode } from "react";
import { createContext, useContext } from "react";

type ThemeMode = "light" | "dark";
interface ThemeContextProps {
    themeMode: string;
    darkTheme: () => void;
    lightTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    themeMode: "dark",
    darkTheme: () => {},
    lightTheme: () => {},
});

// export const ThemeProvider = ThemeContext.Provider;
export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [themeMode, setThemeMode] = React.useState<ThemeMode>("dark");

    const setDarkTheme = () => setThemeMode("dark");
    const setLightTheme = () => setThemeMode("light");

    return (
        <ThemeContext.Provider value={{ themeMode, darkTheme: setDarkTheme, lightTheme: setLightTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export default function UseTheme () { 
    return useContext(ThemeContext);
}

