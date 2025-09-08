import './App.css';
import { BrowserRouter as Router , Routes,Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PageError from './pages/PageError';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import CategoryPage from './pages/CategoryPage';
import CartList from './pages/CartList';
import { ShopList } from './pages/ShopList';
import Payment from './components/Navbar/Payment';
import Footer from './components/Navbar/Footer';
import { useEffect } from 'react';
import Contact from './pages/Contact';


function ScrollToTop ()  {
  const {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])
return null
 }

function App() {
  return (
    <div className='dark:bg-slate-700 dark:text-white' >
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route  path='/' index element={<Home />} />
        <Route  path='*' index element={<PageError />} />
        <Route  path='about' index element={<About />} />
        <Route  path='cartList' index element={<CartList />} />
        <Route  path='shop' index element={<ShopList />} />
        <Route  path='payment' index element={<Payment />} />
        <Route  path='contect' index element={<Contact />} />
        <Route  path='/products/:category' index element={<CategoryPage />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
