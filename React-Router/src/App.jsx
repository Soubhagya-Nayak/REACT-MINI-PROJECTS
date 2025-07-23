import './App.css';
import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

export const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
