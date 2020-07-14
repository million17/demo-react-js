import React, {
    Component
} from 'react'
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import {
    Route,
    Link
} from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true,
    },
    {
        name: 'About',
        to: '/about',
        exact: true,
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: true,
    },
    {
        name: 'Products',
        to: '/products',
        exact: true,
    },
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';

                return (
                    <Link to={to}
                        className={`nav-link ${active}`}
                    >
                        {label}</Link>
                )
            }}
        />
    );
}

class Menu extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    {this.showMenus(menus)}
                </Nav>
            </Navbar>
        )
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
                        activeOnlyWhenExact={menu.exact} />
                )
            });
        }
        return result;
    }
}
export default Menu;