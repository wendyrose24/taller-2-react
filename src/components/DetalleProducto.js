// src/components/DetalleProducto.js
import React from 'react';

const DetalleProducto = ({ nombre, precio, descripcion }) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <p>Precio: ${precio}</p>
            <p>{descripcion}</p>
        </div>
    );
};

export default DetalleProducto;
