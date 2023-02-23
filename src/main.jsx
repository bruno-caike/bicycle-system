import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './assets/style/GlobalStyle'
import RoutesSystem from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RoutesSystem />
  </React.StrictMode>
)
