import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom' 
import styled from 'styled-components'

import Header from './components/Header/header'
import Sidebar from './components/Sidebar/sidebar'

import Home from './pages/Home/home'
import Comment from './pages/Comment/comment'
import Contact from './pages/Contact/contact'
import Galleryx from './pages/Gallery/gallery';
import Housing from './pages/Housing/housing'
import Pricing from './pages/Pricing/pricing'
import Location from './pages/Location/location'

import "./i18n"


const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  
`

const ContentWrapper = styled.div`
  margin-left: 10px;
  width: 100%;
  
`

const SidebarWrapper = styled.div`
  height: 100%;
`

const BackGround = styled.div`

  margin: 0px;
`
//background-color: #414a4F;
function App(){


  return (
    <React.StrictMode>
    <Router>
      <BackGround>
        <Header />
        <HomeWrapper>
          <SidebarWrapper>
            <Sidebar />
          </SidebarWrapper>
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Comment" element={<Comment />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Galery" element={<Galleryx />} />
              <Route path="/Housing" element={<Housing />} />
              <Route path="/Pricing" element={<Pricing />} />
              <Route path="/Location" element={<Location />} />
            </Routes>
          </ContentWrapper>
        </HomeWrapper>
      </BackGround>
    </Router>
  </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


