import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import AppRouter from './AppRouter'
function App() {
  return (
    <Provider store={store}>    <AppRouter />
    </Provider>
  );
}

export default App;
