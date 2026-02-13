import { useState } from 'react'
import './App.css'

export default function App() {
  const [page, setPage] = useState('agenda')

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">commit-demo</p>
        <h1>{page === 'agenda' ? 'AGENDA' : 'Practises'}</h1>
        <nav className="nav">
          <button
            type="button"
            className={page === 'agenda' ? 'nav-button active' : 'nav-button'}
            onClick={() => setPage('agenda')}
          >
            Home
          </button>
          <button
            type="button"
            className={page === 'practises' ? 'nav-button active' : 'nav-button'}
            onClick={() => setPage('practises')}
          >
            Practises
          </button>
        </nav>
      </header>

      {page === 'agenda' ? (
        <section className="panel">
          <h2>Agenda</h2>
          <ul className="agenda">
            <li>
              <span className="agenda-label">1a.</span>
              Show a PR with a single commit and a single big set of changes.
            </li>
            <li>
              <span className="agenda-label">1b.</span>
              Make a change on this PR branch and run `git commit --amend --no-edit`.
            </li>
            <li>
              <span className="agenda-label">2a.</span>
              Show the set of small commit changes and how to `rebase --interactive`,
              `fixup`, and edit the commit message before force pushing.
            </li>
            <li>
              <span className="agenda-label">2b.</span>
              Want to keep two messages? Use `squash` instead.
            </li>
            <li>
              <span className="agenda-label">3a.</span>
              Show how the quick fix flow works with this system.
            </li>
          </ul>
        </section>
      ) : (
        <section className="panel">
          <h2>Single commit with explanation in commit msg body</h2>
          <ul>
            <li>
              <div className="li-content">
                <p>
                  Especially for squash and merge PRs: `fixup` all commits and
                  edit the message to describe the full set of changes.
                </p>
                <code>git log</code>
                <p>Select a commit hash a couple of commits back.</p>
                <code>git rebase --interactive &lt;commit-hash&gt;</code>
                <p>
                  Press `i` to insert, arrow to commits and replace action with
                  `fixup` and/or squash.
                </p>
                <p>Write the correct commit message, save, and exit.</p>
                <code>git push -f</code>
              </div>
            </li>
            <li>
              <div className="li-content">
                <p>
                  If something does not fit into the description of the change
                  set, make it a separate commit or PR. This prevents different
                  change sets holding each other up.
                </p>
                <p>
                  Example: you have built a feature but tacked on a small fix
                  which does not work, or vice versa. Does everyone use
                  `git stash`?
                </p>
              </div>
            </li>
            <li>
              <div className="li-content">
                <p>
                  No different for quick fixes or small changes. Make the change,
                  open a PR, and if further commits are necessary simply `amend`
                  and `push -f` or `fixup` before merging.
                </p>
              </div>
            </li>
            <li>
              <div className="li-content">
                <p>
                  If working on the same branch as someone else, communicate
                  before force pushing.
                </p>
              </div>
            </li>
          </ul>
        </section>
      )}
    </main>
  )
}
