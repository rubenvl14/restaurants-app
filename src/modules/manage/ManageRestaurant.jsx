import React from 'react';
import './manageRestaurant.css';
import Header from '../../components/header/Header';


export const ManageRestaurant=()=>{
	return (
	<div>
		<Header></Header>
		<div>
			<div className="pedido-card">
				<div>
					<div className="pedido-info">
						<ul>
							<li>
								<span>Pedido</span>
							</li>
							<li>
								<span>Fecha pedido</span>
								<span>Fecha entrega</span>
							</li>
							<li>
								<span className="estado">Estado</span>
							</li>
							<li>
								<span>Platos</span>
							</li>
						</ul>
					</div>
					<form>
						<button>Cambiar estado</button>
					</form>
				</div>
			</div>
			<div className="pedido-card">
				<div>
					<div className="pedido-info">
						<ul>
							<li>
								<span>Pedido </span>
							</li>
							<li>
								<span>Fecha pedido </span>
							</li>
							<li>
								<span>Fecha entrega</span>
							</li>
							<li>
								<span>Estado</span>
							</li>
							<li>
								<span>Platos</span>
							</li>
						</ul>
					</div>
					<form>
						<button>Cambiar estado</button>
					</form>
				</div>
			</div>
		</div>
	</div>);
}