import UseTheme from '@/context/CreateContext';
import React, { useEffect, useState } from 'react'

const isCheckedMode = () => {
    const {themeMode , lightTheme, darkTheme} = UseTheme();
    const [isDarkMode, setDarkMode] = useState(true);

    const IsDark = () => {
        if (themeMode === 'dark') {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }
    useEffect(() => {
        IsDark();
    }, [themeMode]);

  return isDarkMode
}

export default isCheckedMode