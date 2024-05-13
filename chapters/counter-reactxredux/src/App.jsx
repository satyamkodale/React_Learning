import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import DisplayCounter from './components/DisplayCounter'
import Container from './components/Container'
import Controls from './components/Controls'
import { useSelector } from 'react-redux'
import Privacy from './components/Privacy'

function App() {
  const privacy = useSelector(state=>state.privacy)
  return (
    <Container>
    <div className="px-4 py-5 my-5 text-center">
      <Header/>
    <div className="col-lg-6 mx-auto">
    { privacy ? <Privacy/>:<DisplayCounter/>}
      <Controls/>
    </div>
  </div>
  </Container>
  )
}

export default App
