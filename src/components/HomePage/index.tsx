import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import { LOGIN_PATH } from '../../common/constants/routeConstants'

function App() {
   return (
      <div className='App'>
         <header className='App-header'>
            <Link to={LOGIN_PATH}>Washing Machine</Link>
         </header>
      </div>
   )
}

export default App
