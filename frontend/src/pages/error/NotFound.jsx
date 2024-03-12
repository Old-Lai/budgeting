export default function NotFound() {
  return (
    <main>
      <h1>Page Not Found</h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
      <button onClick={() => window.history.back()}>{"<-"} Lets go back to where it was safe</button>
    </main>
  )
}