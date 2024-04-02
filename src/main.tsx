import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'


import configureStore from './redux/store/index.ts'
import App from './App.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={configureStore()} >
      <App />
    </Provider>
  </React.StrictMode>,
)
