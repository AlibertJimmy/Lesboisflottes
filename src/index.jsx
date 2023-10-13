import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom' 
import styled from 'styled-components'

import Header from './components/Header/header'
import Sidebar from './components/Sidebar/sidebar'

import Home from './pages/Home'
import Comment from './pages/Comment/comment'
import Contact from './pages/Contact/contact'
import Galery from './pages/Galery/galery'
import Housing from './pages/Housing/housing'
import Pricing from './pages/Pricing/princing'
import Situation from './pages/Situation/situation'


const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px; 
`

const ContentWrapper = styled.div`
  margin-left: 20px;
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <HomeWrapper>
        <Sidebar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Comment" element={<Comment />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Galery" element={<Galery />} />
            <Route path="/Housing" element={<Housing />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Situation" element={<Situation />} />
          </Routes>
        </ContentWrapper>
      </HomeWrapper>
    </Router>
  </React.StrictMode>
);


