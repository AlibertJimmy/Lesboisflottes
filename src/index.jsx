// Import React Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import Translation index
import './i18n';

// Import Context
import { NavContextProvider } from './context/NavContext';
import { DayPickerContextProvider } from './context/DayPickerContext';

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

// Import Constants
import { headerHeight } from './utils/constants/Global_Constants';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: ${headerHeight}px;
`;

function App () {
  const { t, i18n } = useTranslation();

  return (
    <NavContextProvider>
      <DayPickerContextProvider>
        <React.StrictMode>
          <Router>
            <Header />
              <ContentWrapper id='contentWrapper'>
                <Routes>
                  <Route path={`/${i18n.language}/`} element={<Home />} />
                  <Route path={`/${i18n.language}/${t('Comments')}`} element={<Comment />} />
                  <Route path={`/${i18n.language}/${t('Contact')}`} element={<Contact />} />
                  <Route path={`/${i18n.language}/${t('Gallery')}`} element={<Galleryx />} />
                  <Route path={`/${i18n.language}/${t('Housing')}`} element={<Housing />} />
                  <Route path={`/${i18n.language}/${t('Prices')}`} element={<Pricing />} />
                  <Route path={`/${i18n.language}/${t('Access')}`} element={<Location />} />
                </Routes>
              </ContentWrapper>
            <Footer />
        </Router>
      </React.StrictMode>
    </DayPickerContextProvider>
  </NavContextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
