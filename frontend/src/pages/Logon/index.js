import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'

import './style.css';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon(){
    return (
        <div className = "logonContainer">
        <section className = "form">
            <img src = {logo} alt = "Be the Hero"/>
            <form>
                <h1>Faça seu Logon</h1>
                <input placeholder = "Sua ID" />
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