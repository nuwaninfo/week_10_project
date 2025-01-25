import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

import Header from "./components/Header"
import MyContainer from "./components/MyContainer"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import About from "./components/About"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MyContainer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <div>App</div>
    </>
  )
}

export default App
