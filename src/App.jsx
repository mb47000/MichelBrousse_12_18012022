import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Community from './pages/Community'
import Dashboard from './pages/Dashboard'
import Parameter from './pages/Parameter'
import Profil from './pages/Profil'
import Header from './components/Header'

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="profil" element={<Profil />} />
        <Route path="parameter" element={<Parameter />} />
        <Route path="community" element={<Community />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Fragment>
  )
}

export default App
