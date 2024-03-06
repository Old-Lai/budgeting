import { Outlet } from "react-router-dom"
export default function Root() {
  return (
    <>
        <header>

        </header>
        <main>
            <Outlet context={{}}/>
        </main>
        <footer>
            
        </footer>
    </>
  )
}