import React, { Component } from 'react';
import { Content, Theme } from '@carbon/react';
import AppHeader from './components/Header';
import NotFound from './components/NotFound';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Theme theme="g90">
            <AppHeader />
          </Theme>
          <Content>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
