import Aboutme from './pages/Aboutme';
import Experiences from './pages/Experiences';
import Footer from './pages/Footer';
import NavBar from './pages/NavBar';
import PagesMain from './pages/PagesMain';
import Projects from './pages/Projects';
import TechPage from './pages/TechPage';
import styles from './style';





export const App = () => {
  return (
    // <main className='flex w-full h-screen overflow-x-hidden text-neutral-300 antialiased 
    // selection:bg-cyan-300 selection:text-cyan-900 '>
    <main className='bg-slate-800 w-full overflow-hidden'>
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.flexStart}`}>
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
  )
}

export default App