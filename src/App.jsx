import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Get from './Component/Get'
import Post from './Component/Post'
import Header from './Component/Header'
import Update from './Component/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <HashRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Get />}/>
      <Route path='/Post' element={<Post />}/>
      <Route path='/Update/:id' element={<Update />}/>
    </Routes> 
  </HashRouter>
  </>
  )
}

export default App
