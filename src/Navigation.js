import Logo from './Eazy.jpg';
import './Navigation.css'
import React, { Component } from 'react'

class Navigation extends Component {
    render() {
        const sections=['PG Manager','Search']
        const navlinks=sections.map(section=>{
            return(
            <li><a href={"#"+section}>{section}</a></li>
        )
    })
        return (
            
        <nav>
        <h1 className="logo">EazyPG </h1>
        <ul>
           {navlinks}
        </ul>
        </nav>
            
        )
    }
}

export default Navigation
