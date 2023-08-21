import React from "react";
import CartWidget from "./CartWidget";
import Nav from 'react-bootstrap/Nav';
import './style.css'

function Menu() {
  return (
    <>
      <Nav className="justify-content-center" to="/home">
        <Nav.Item c>
          <Nav.Link href="/">Nuestra Empresa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Contacto">Contacto</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/TiendaOnline">Tienda Online</Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">Muy Dulce Tucuman</p>
    </>
  );
}

export default Menu;