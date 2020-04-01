import React, {useState} from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'

import './style.css';
import api from '../../services/api'
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e) {
        e.preventDefault();
        try {
            console.log(id);
            const response = await api.post('session', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')
        } catch {
            alert('Falha no login, tente novamente')
        }
    }

    return (
        <div className = "logonContainer">
        <section className = "form">
            <img src = {logo} alt = "Be the Hero"/>
            <form onSubmit = {handleLogin}>
                <h1>Faça seu Logon</h1>
                <input placeholder = "Sua ID" value = {id} onChange = {e => setId(e.target.value)} />
                <button className = "button" type = "submit">Entrar</button>
                <Link className = "back-link" to = "/register">
                    <FiLogIn size = {16} color = "#E0204" />
                        Não tenho cadastro
                </Link>
            </form>
        </section>
        <img src = {heroesImg} alt = "Heroes" />
        </div>
    );
}