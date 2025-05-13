import './App.css'
import { Outlet, useLocation } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer"
import MouseTrail from './components/MouseTrail';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggleButton } from './components/ThemeToggleButton';

function App() {

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <ThemeProvider>
    <div className="flex flex-col min-h-screen bg-cover bg-no-repeat bg-center bg-[var(--color-primary)]">
      <MouseTrail/>
      <ThemeToggleButton />
    {!isHomePage && <Header/>}
      <main className="flex-grow flex items-center justify-center">
                <Outlet />
      </main>
      {!isHomePage && <Footer/>}
    </div></ThemeProvider>
  )
}

export default App
