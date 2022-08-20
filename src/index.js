import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import questions from './questions';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App questions = {questions()}/>
  </React.StrictMode>
);

reportWebVitals();