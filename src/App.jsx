import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<h1>Home</h1>} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
