import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import About from "./pages/About"
import Contact from "./pages/Contact"
import SingleMovie from "./pages/SingleMovie"
function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:id" element={<SingleMovie />} />
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
