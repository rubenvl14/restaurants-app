import React from 'react';
import "./restaurantCard.css";

export const RestaurantCard = (props) => {
    const {
        name,
        phone,
        id
    } = props.restaurant;

    console.log(`Render Resaurant Card with id ${id}`)
    return (
        <div className="restaurant-card loading">
            <div>Carrusel</div>
            <form>
                <div>
                    <ul>
                        <li>
                            <input
                                type="checkbox"                            />
                            <span>Nombre plato</span>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>Nombre plato 2</span>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>Nombre plato 3</span>
                        </li>
                    </ul>
                </div>
                <div className="restaurant-info">
                    <span>{name}</span>
                    <span>Telefono {phone}</span>
                </div>
                <button>Pedir</button>
            </form>
        </div>
    )
}