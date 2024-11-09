import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import './App.css';


const App = () => (
  <div>
    <Header />
    <main>
      <HeroSection />

      <section id="about">
        <h2>About Us</h2>
        <p>Information about AskVox...</p>
      </section>
      <section id="features">
        <h2>Features</h2>
        <p>Features of AskVox...</p>
      </section>
      <section id="plans">
        <h2>Plans</h2>
        <p>Subscription plans for AskVox... </p>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      </section>
    </main>
    <Footer />
  </div>
);

export default App;