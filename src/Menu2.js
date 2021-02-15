import React from 'react'

import  './style2.css';
export const Menu2 = () => {

    const handleCambiarClase=()=>{
        let siteNav = document.getElementById('site-nav');
            siteNav.classList.toggle('site-nav-open');
        
        let menuOpen = document.getElementById('menu-toggle');
            menuOpen.classList.toggle('menu-open');
    }
    

    return (
        <>
        <header>
            <div className="container">
                <h1 className="logo">Logo <span>Empresa</span></h1>
            </div>
            <nav id="site-nav" className="site-nav">
                <ul>
                    <li><a href="#"><i className="fa fa-home site-nav--icon"></i>Home</a></li>
                    <li><a href=""><i className="fa fa-info site-nav--icon"></i>About</a></li>
                    <li><a href=""><i className="fa fa-pencil-alt site-nav--icon"></i>Blog</a></li>
                    <li><a href=""><i className="fa fa-dollar-sign site-nav--icon"></i>Precios</a></li>
                    <li><a href=""><i className="fa fa-envelope site-nav--icon"></i>Contactos</a></li>
                </ul>
            </nav>
            <div id="menu-toggle" className="menu-toggle" onClick={handleCambiarClase}>
                <div className="hamburger"></div>
            </div>
            
        </header>
        <main>
            <img className="img-fondo" src="./assets/heroes/LASAÑA MIXTA5.png"></img>
        </main>
        </>

    )
}
