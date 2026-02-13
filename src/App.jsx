import './App.css'
import Navbar from './ui/Navbar.jsx'

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">commit-demo</p>
        <h1>Commit Approaches</h1>
        <p className="lead">What git commands are you using regularly?</p>
        <div className="chip-row">
          <span className="chip">TL;DR</span>
          <span className="chip">Single commit</span>
          <span className="chip">Commit message body</span>
        </div>
      </header>

      <section className="panel">
        <h2>Single commit with explanation in commit msg body</h2>
        <ul>
          <li>
            Especially for squash and merge PRs: `fixup` all commits and edit the
            message to describe the full set of changes.
          </li>
          <li>
            If something does not fit into the description of the change set,
            make it a separate commit or PR. This prevents different change sets
            holding each other up.
            <br/>
            Example: you have built a feature but tacked on
            a small fix which does not work, or vice versa. Does everyone use
            `git stash`?
          </li>
          <li>
            No different for quick fixes or small changes. Make the change, open
            a PR, and if further commits are necessary simply `amend` and `push -f`
            or `fixup` before merging.
          </li>
        </ul>
      </section>
    </main>
  )
}
