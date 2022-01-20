import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Community from './pages/Community'
import Home from './pages/Home'
import Parameter from './pages/Parameter'
import Profil from './pages/Profil'
import Header from './components/Header'
import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profil" element={<Profil />} />
        <Route path="parameter" element={<Parameter />} />
        <Route path="community" element={<Community />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Fragment>
  )
}

export default App
