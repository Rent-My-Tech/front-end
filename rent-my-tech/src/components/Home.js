import React from 'react'
import { Link } from 'react-router-dom';





export default function Home(props) {



    return (
        <div className="App">
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign up</Link>
      
    </div>
    
    )
}