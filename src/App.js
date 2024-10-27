import React from 'react';
import ListaDeProductos from './components/ListaDeProductos';
import DetalleProducto from './components/DetalleProducto';

function App() {
    const productos = [
        { nombre: 'Producto 1', precio: 100 },
        { nombre: 'Producto 2', precio: 150 },
    ];

    return (
        <div>
            <h1>Lista de Productos</h1>
            <ListaDeProductos productos={productos} />
        </div>
    );
}

export default App;

