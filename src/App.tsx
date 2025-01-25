import Header from "./components/Header"
import MyContainer from "./components/MyContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MyContainer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
