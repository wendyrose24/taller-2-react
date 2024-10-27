// src/components/Producto.js
import React from 'react';

const Producto = ({ nombreProducto, precio }) => {
    return (
        <div>
            <h2>{nombreProducto}</h2>
            <p>Precio: ${precio}</p>
        </div>
    );
};

export default Producto;
