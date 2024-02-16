
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider';
import { ContactPage } from './pages/contact/contact';
import { Header } from './layouts/header';
import { Footer } from 'flowbite-react';
import { FooterComponent } from './layouts/footer';
import { ShopPage } from './pages/shop/shop';
import { Product } from './pages/products/products';
import { Cart } from './pages/cart/cart';
function App() {
  return (
    <MyProvider>
      <Header/>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes >
      <FooterComponent/>
    </MyProvider>

  );
}
export default App;
