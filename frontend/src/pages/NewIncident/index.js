import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

export default function NewIncident() {
    return (
        <div className = "new-incident-container">
            <div className = "content">
                <section>
                    <img src = {logoImg} alt = "Be The Hero"></img>
                    <h1>Cadastro novo caso</h1>
                    <p>Descrever o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className = "back-link" to="/profile">
                        <FiArrowLeft size = {16} color = "#E02041" />
                        Voltar pra home
                    </Link>
                </section>
                <form onSubmit = "">
                    <input placeholder = "Titulo do caso" value = "" onChange = ""></input>
                    <textarea placeholder = "Descrição" value = "" onChange = ""></textarea>
                    <input placeholder = "Valor em reais" value = "" onChange = ""></input>
                    <button className = "button" type = "submit">Registrar</button>
                </form>
            </div>
        </div>
    );
}