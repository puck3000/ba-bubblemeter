import React from 'react'
import { Router, Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>CloneTestr</Link>
          </li>
        </ul>
      </nav>
    </Router>
  )
}
