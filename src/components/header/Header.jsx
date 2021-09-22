import './header.css';
import { connect } from 'react-redux';

const Header=(props)=>{
	const {
		userInfo
	}=props;

	return (
	<div>
		<span className="title">Inicio</span>
		<span className="username">Hola {userInfo.name}</span>
	</div>
	);
}

export default connect(
	store =>({
		userInfo:store.login.userInfo,
	}),
	null
)(Header)