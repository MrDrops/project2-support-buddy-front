import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"

class NavBar extends Component {
    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>React</h1>
                <div className='menu-icon'>
                    {MenuItems.map((item, index) => {
                        return (
                            <Link className={item.cName} />
                        )
                    })}
                    
                </div>
            </nav>
        );
    };
}
export default NavBar