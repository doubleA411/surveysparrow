import Card from "./Card";
import Card2 from "./Card2";
import Detailed from "./Detailed";
import Features from "./Features";
import FooterCard from "./FooterCard";
import Grey from "./Grey";
import Header from "./Header";
import Hero from './Hero';
import Hero2 from "./Hero2";
import Purpose from "./Purpose";
import Review from "./Review";
import SignUpCard from "./SignUpCard";
import Stepper from "./Stepper";
import Footer from "./Footer";

import './scss/app.scss';
import HeaderMobile from "./HeaderMobile";
import { useEffect, useState } from "react";


function App() {

  const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 1000);

  function checkMobile() {
   setIsMobile(window.innerWidth <=1000);
  }

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize',checkMobile);

  },[])

  return (
    <div className="app">
      {/* Header */}
      { isMobile ? <HeaderMobile /> : <Header />}
      <Hero />
      <Hero2 />
      <Card />
      <div className="blue">
        <Card2 />
        <Stepper />
        <Features />
      </div>
      <Purpose />
      <SignUpCard bottom ={true} />

      <Detailed />
      <Grey />
      <SignUpCard bottom ={false} />
      <Review isMobile = {isMobile} />
      <FooterCard />
      <Footer />

      {/* Footer */}
    </div>
  );
}

export default App;
