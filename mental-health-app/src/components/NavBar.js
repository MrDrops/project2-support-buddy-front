import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"

class NavBar extends Component {
    render() {
        return (
            <nav className='NavBarItems'>
                <h1 className='navbar-logo'>React <i className='#'></i></h1>
                <div className='menu-icon'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li>
                                <a className='item.cName' href='item.url'>
                                {item.title}   
                                </a>

                            </li>
                        )
                    })}
                    
                </div>
            </nav>
        );
    };
}
export default NavBar