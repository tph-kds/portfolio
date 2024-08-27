import ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/CreateContext";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      < App /> 
    </ThemeProvider>
  </BrowserRouter> 
)
