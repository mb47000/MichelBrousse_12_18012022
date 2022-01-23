import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserIdProvider } from './utils/context'
import App from './App'
import 'normalize.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserIdProvider>
        <App />
      </UserIdProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
