import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App.jsx';
import GlobalStyle from './GlobalStyles.jsx';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
