import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact : true,
        main : () => <About />
    },
    {
        path : '/contact',
        exact : true,
        main : () => <Contact />
    },
    {
        path : '',
        exact : true,
        main : () => <NotFound />
    },
    {
        path : '/products',
        exact : true,
        main : () => <Products />
    },
]

export default routes;