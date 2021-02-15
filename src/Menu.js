import React from 'react'
import  './style.css';

export const Menu = () => {
    return (
        <div>
            <header>
                <input type="checkbox" id="btn-menu"></input>
                <label for="btn-menu"><img src="./assets/iconoMenu.png"></img></label>
                <nav className="menu">
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Servicios</a></li>
                        <li><a href="">Productos</a></li>
                        <li><a href="">Clientes</a></li>
                        <li><a href="">Contacto</a></li>
                       
                    </ul>

                </nav>
            </header>
        </div>
    )
}
