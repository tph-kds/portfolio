import { useEffect, useState } from 'react';
import ThemeToggle from './components/mode/Darkmode';
// import ThemeProvider from './context/CreateContext';
// import { useTheme } from './hooks/useTheme';
import Aboutme from './pages/Aboutme';
import Experiences from './pages/Experiences';
import Footer from './pages/Footer';
import NavBar from './pages/NavBar';
import PagesMain from './pages/PagesMain';
import Projects from './pages/Projects';
import TechPage from './pages/TechPage';
import styles from './style';
import UseTheme from './context/CreateContext';







export const App = () => {
  // const { theme, toggleTheme } = useTheme();
  // const [themeMode, setThemeMode] = useState<string>('dark');
  // const darkTheme = () => setThemeMode('dark');
  // const lightTheme = () => setThemeMode('light');
  // useEffect(() => {
  //   document.documentElement.classList.add(themeMode);
  //   document.documentElement.classList.remove(themeMode === 'dark' ? 'light' : 'dark');
  //   localStorage.setItem('theme', themeMode);

    // document.querySelector('html')?.classList.remove("dark", "light");
    // document.querySelector('html')?.classList.add(themeMode);

      // const [isTheme, setIsTheme] = useState(true);
      // if (themeMode === 'dark') {
      //   setIsTheme(true); 
      // } else {
      //   setIsTheme(false);
      // }
  // }, [themeMode]);


  const {themeMode} = UseTheme();
  // console.log(themeMode);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
      if (window.scrollY > 50) {
          setIsScrolled(true);
      } else {
          setIsScrolled(false);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  
  {/* <main className='flex w-full h-screen overflow-x-hidden text-neutral-300 antialiased 
  selection:bg-cyan-300 selection:text-cyan-900 '> */}
  return (
    // <ThemeProvider value={{themeMode, darkTheme, lightTheme}} >
      <main className={`  ${themeMode === 'light' ? 'null' : 'bg-gray-900 text-white'} w-full overflow-hidden`}>
        { themeMode === 'dark' ? 
          (
            <div className="relative h-full w-full bg-slate-950">
              <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
              <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            </div>
          )
        : <></> }
        <div className={`${styles.paddingX} ${styles.flexCenter} mb-30 fixed top-0 left-0 w-[100%] h-[100px] p-4 z-50 transition duration-300 ${isScrolled ? 'backdrop-blur-lg bg-opacity-90' : ''} `} >
          <div className={`${styles.boxWidth} `}>
            <NavBar />
          </div>
        </div>
        
        <div className={`bg-primary ${styles.flexStart} pt-20`}>
          <div className={`${styles.boxWidth}`}>

              <PagesMain />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <TechPage />
            <Aboutme />
            <Experiences />
            <Projects />
            <Footer /> 
          </div>
        </div>

      </main>
    // </ThemeProvider>
  )
}

export default App