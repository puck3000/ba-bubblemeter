import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom'
import CloneTestr from './pages/CloneTestr'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <>
        <header className='mx-6 mt-6 mb-1'>
          <nav className='mt-4 border-b-2 border-pink-700'>
            <ul className='flex'>
              <li className='mr-4 mb-2 text-pink-700'>
                <NavLink
                  exact
                  to='/'
                  activeClassName='bg-pink-200 text-pink-700 px-2 py-1 rounded-md'
                >
                  Home
                </NavLink>
              </li>
              <li className='mx-4 text-pink-700'>
                <NavLink
                  to='/clonetestr'
                  activeClassName='bg-pink-200 text-pink-700 px-2 py-1 rounded-md'
                >
                  CloneTestr
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className='mx-6 mb-6'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/clonetestr'>
              <CloneTestr />
            </Route>
          </Switch>
        </main>
      </>
    </Router>
  )
}

export default App
