import './App.css'
import Navbar from './ui/Navbar.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="hero">
        <h1>React App Ready</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
      </main>
    </div>
  )
}
