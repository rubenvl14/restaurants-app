import React, { useEffect, useState } from 'react';
import './restaurantList.css';
import { getMenus } from "./actions";
import { loadMenus } from "./reducer";
import { RestaurantCard } from './components/restaurantcard/RestaurantCard';
import Header from '../../components/header/Header';
import { connect } from 'react-redux';

const RestaurantList=(props)=>{

	const{
		loading,
		menus
	} = props

	const [reload, setReload] = useState(false);

	useEffect(()=>{
		loadMenus(0, 20);
	},[]);

	
	useEffect(()=>{
		if(reload){
			loadMenus(0, 20);
		}
	},[reload]);


	console.log("Render lists " , reload);

	return (
	<div>
		<Header>
		</Header>
		<button onClick={()=>setReload(true)}>Reload</button>
		<div className="restaurants">
		{loading &&
			<div className="loading">
				Cargando
			</div>
		}
		{!loading && menus.map(menuItem=>
			<RestaurantCard restaurant={menuItem} key = {menuItem.id}>
				</RestaurantCard>
		)}
		</div>
	</div>);
}

export default connect(
    store => ({
		loading: store.restaurants.loading,
    }),
    dispatch => ({
        loadMenus : (start, count) => dispatch(getMenus(start, count))
    })
)(RestaurantList);
