import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Geekcontainer from './Component/Geekcontainer'
import Content1 from './Component/Content1'
import Content2 from './Component/Content2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header></Header>
       <Geekcontainer></Geekcontainer>
       <Content1></Content1>
       <Content2/>
       <Footer></Footer>
    </>
  )
}

export default App
