// Import React Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Sidebar from './components/Sidebar/sidebar'
import Home from './pages/Home/home';
import Comment from './pages/Comment/comment';
import Contact from './pages/Contact/contact';
import Galleryx from './pages/Gallery/gallery';
import Housing from './pages/Housing/housing';
import Pricing from './pages/Pricing/pricing';
import Location from './pages/Location/location';

// Import Style
import styled from 'styled-components';

// Import Translation index
import './i18n';
import { NavContextProvider } from './context/NavContext';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  
`;

const ContentWrapper = styled.div`
  
  width: 100%;
  padding: 20px 0 ;
  
`;

function App () {
  return (
    <NavContextProvider>
      <React.StrictMode>
        <Router>
          <Header />
          <HomeWrapper>
            <ContentWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Comment" element={<Comment />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Gallery" element={<Galleryx />} />
                <Route path="/Housing" element={<Housing />} />
                <Route path="/Pricing" element={<Pricing />} />
                <Route path="/Location" element={<Location />} />
              </Routes>
            </ContentWrapper>
          </HomeWrapper>
          <Footer />
      </Router>
    </React.StrictMode>
  </NavContextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
