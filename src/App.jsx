import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Fragment>
  )
}

export default App
