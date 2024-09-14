import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './theme.jsx'; // Import theme from theme.jsx
import { ThemeProvider } from '@mui/material/styles';
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import App from './App';
import './index.css';

const store = configureStore({
  reducer: rootReducer, // Use the combined reducer
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </Provider>
  );