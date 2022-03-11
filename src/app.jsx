import { BrowserRouter } from 'react-router-dom';
import Banner from './exposes/banner';
import Header from './exposes/header';
import HeroSection from './exposes/hero-section';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <HeroSection />
      <Banner />
    </BrowserRouter>
  );
};
