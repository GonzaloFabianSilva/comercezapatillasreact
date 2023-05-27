import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export const CartItem = ({ name, price, stock, id }) => {

    const { eliminarItem } = useContext(CartContext)

    return (
        <div>
            <section className='producto-carrito'>
                <h4>{name}</h4>
                <h4>Precio por unidad: ${price}</h4>
                <h4>{stock}</h4>
                <button onClick={() => eliminarItem(id)} className='boton'>Eliminar producto</button>
            </section>
        </div>
    )
}