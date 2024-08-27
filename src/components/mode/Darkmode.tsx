import React, { useEffect, useState } from 'react';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import togglecss from '@/components/mode/DarkModecss';
// import UseTheme from '@/context/CreateContext';
import UseTheme  from '@/context/CreateContext';
// import { useTheme } from '@/hooks/useTheme';
import "@/custom.css"

const ThemeToggle = () => {

    const [darkMode, setDarkMode] = useState(true);
    // const [themeMode, setThemeMode] = useState<string>('dark');
    // const darkTheme = () => setThemeMode('dark');
    // const lightTheme = () => setThemeMode('light');
    // useEffect(() => {
    //     const theme = localStorage.getItem('theme');
    //     if (theme === 'dark')  setDarkMode(true);

    // }, []);
    // useEffect(() => {
    //     if (darkMode) {
    //         document.documentElement.classList.add('dark');
    //         localStorage.setItem('theme', 'dark');
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //         localStorage.setItem('theme', 'light');
    //     }
    // }, [darkMode]);
    const {themeMode , lightTheme, darkTheme} = UseTheme();

    const onChangeTheme = (e: { currentTarget: { checked: any; }; }) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
            // setDarkMode(true);
        } else {
            lightTheme();
            // setDarkMode(false);
        }
    }



    useEffect(() => {
        const root: HTMLElement = window.document.documentElement;

        root.classList.add(themeMode);
        root.classList.remove(themeMode === 'dark' ? 'light' : 'dark');
        localStorage.setItem('theme', themeMode);
  
      // document.querySelector('html')?.classList.remove("dark", "light");
      // document.querySelector('html')?.classList.add(themeMode);
  
        // const [isTheme, setIsTheme] = useState(true);
        // if (themeMode === 'dark') {
        //   setIsTheme(true); 
        // } else {
        //   setIsTheme(false);
        // }
    }, [themeMode]);
    // console.log(themeMode);


  return (
    <label className={`${togglecss.toggle} relative inline-flex items-center cursor-pointer sm:ml-0 ml-[-35px]`}>
      <input
        type="checkbox"
        value=""
        checked={themeMode === 'dark'}
        onChange={onChangeTheme}
        className={`${togglecss.checkbox} sr-only peer`}
      />
      {/* <div className={`${togglecss.icons}`}>
        <RiSunLine className={`${togglecss.icon} ${themeMode === 'dark' ? togglecss.hidden : ''}`} />
        <RiMoonLine className={`${togglecss.icon} ${themeMode === 'light' ? togglecss.hidden : ''}`} />
      </div> */}

      
        <div className='ml-12 flex-row w-16 h-8 flex items-center cursor-pointer justify-center dark:bg-gray-90 
        bg-steall-800 rounded-full p-1 hover:rounded-3xl hover:shadow-2xl hover:shadow-rose-600 border-2 duration-300 ease-in-out transition-all'
        onClick={() => setDarkMode(!darkMode)}
        >
            
            <RiMoonLine size={18} className={`${togglecss.icon} ${themeMode ? 'text-black' : 'text-white'} gradient-text-white`} />
            <div className={ `absolute mr-8 w-6 h-6 flex items-center justify-center rounded-full  shadow-md transform duration-300 ease-in-out transition-transform   
            ${darkMode ? "dark-toggle_gradient" : "light-toggle_gradient"}` }
                style={!darkMode ? { transform: 'translateX(30px)' } : { transform: 'translateX(0px)' }}
            ></div>
            <RiSunLine size={18} className={`${togglecss.icon} ml-auto gradient-text`} />

        
        </div>
    </label>
  );
};

export default ThemeToggle;
