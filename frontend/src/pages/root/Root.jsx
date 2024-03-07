import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import './root.sass'

export default function Root() {
  return (
    <>
        <header>
          <NavBar />
        </header>
        <main>
            <Outlet context={{}}/>
        </main>
        <footer>
            
        </footer>
    </>
  )
}