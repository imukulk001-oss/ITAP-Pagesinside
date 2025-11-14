import React from 'react';
// import Header1 from './components/Header1';
import Header2 from './components/Header2';
// import HeroSection from './components/HeroSection';

// import AppsCatalog from './components/AppsCatalog';
// import Footer from './components/Footer';
import Copyright from './components/Copyright';
// import Dashboard from './components/Dashboard';
import './App.css';
import DashboardLayout from './components/DashboardLayout';

function App() {
  return (
    <div className="App">
      {/* <Header1 /> */}
      <Header2 />
      {/* <HeroSection /> */}
      {/* <LoginSection /> */}
      {/* <AppsCatalog /> */}
      <DashboardLayout />
      {/* <Footer /> */}
      <Copyright />
    </div>
  );
}

export default App;

