import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Product Managements',
        to: '/product-list',
        exact: false
    }
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route
            path={to}   
            exact={activeOnlyWhenExact}
            children={({match}) => {
                var active = match ? 'active' : '';
                return (
                    <li className={`nav-item ${active}`}>
                        <Link
                            to={to}
                            className="nav-link">
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand">Alibaba</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </nav>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        
        return result;
    }
}
export default Menu;
