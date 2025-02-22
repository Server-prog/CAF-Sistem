import {useState} from 'react'
import  { BrowserRouter as Router} from 'react-router-dom'
import { MainRoutes } from "./routes";

 export function App() {
  const [currentPage,] = useState("home");
   return (
    <>
    <Router>
      <MainRoutes/>
    </Router>

    {currentPage === "about" && <h1>About Page</h1>}

    </>
  )
}
