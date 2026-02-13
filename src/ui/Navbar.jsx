export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">Demo Studio</div>
      <nav className="nav-links" aria-label="Primary">
        <a href="#work">Work</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="cta">Join Waitlist</button>
    </header>
  )
}
