import React, {  useState } from 'react';
import { loginUser } from './actions';
import './login.css';
import { connect } from 'react-redux';


const Login = (props) => {

    const {
        login,
        loading
    } = props;


    const [form, setForm] = useState({
        login: '',
        password: ''
    })

    console.log(form);

    const updateValue = (e, key) => {
        setForm({
            ...form,
            [key]: e.target.value
        })
    };


    return (
        <div className="login">
            Esto es la pantalla de Login
            {loading &&
            <div className="loading">Loggeando</div>
            }
            <form onSubmit={(e) => {
                console.log('login');
                login(form.login, form.password);
                e.stopPropagation();
                e.preventDefault();

                return false;
            }}>
                <input type="text" placeholder="Login" value={form.login} onChange={(e) => updateValue(e, 'login')} />
                <input type="password" placeholder="Password" value={form.password} onChange={(e) => updateValue(e, 'password')} />
                <button>Login</button>
            </form>
        </div>
    )
}


export default connect(
    store => ({
        loading: store.login.loading,
    }),
    dispatch => ({
        login : (login, password) => dispatch(loginUser(login, password))
    })
)(Login);