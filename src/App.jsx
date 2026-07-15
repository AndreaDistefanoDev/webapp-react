import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import About from "./pages/About"
import Contact from "./pages/Contact"
import SingleMovie from "./pages/SingleMovie"
import AdminLayout from "./layouts/AdminLayout"
import Dashboard from "./pages/Admin/Dashboard"
import AddMovie from "./pages/Admin/AddMovie"

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<SingleMovie />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route element={<AdminLayout />} >
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/movies/create" element={<AddMovie />} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
