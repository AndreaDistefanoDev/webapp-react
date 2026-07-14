import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
