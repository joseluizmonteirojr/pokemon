
import React from 'react';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale-provider/pt_BR';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './style';
import Header from './components/header';
import Routes from './routes';

const App = () => (
  <Router>
    <ConfigProvider locale={ptBR}>
      <GlobalStyle />
      <Header />
      <Routes />
    </ConfigProvider>
  </Router>
);

export default App;
