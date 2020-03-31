import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './style.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className = "profile-container">
            <header>
                <img src = {logoImg} alt = "Be The Hero"/>
                <span>Bem vindo, ONG Tal</span>

                <Link className="button" to="incidents/new">Cadastrar novo caso</Link>
                <button type = "button" onClick = "">
                    <FiPower size = {18} color = "#E02041"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>
                <ul>
                    <li>
                        <strong>CASO: </strong>
                        <p>Título</p>
                        <strong>DESCRIÇÃO: </strong>
                        <p>descrição: ...</p>
                        <strong>Valor:</strong>
                        <p>R$ 199.00</p>
                        <button onClick = "" type="button">
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                        </button>
                    </li>
                    <li>
                        <strong>CASO: </strong>
                        <p>Título</p>
                        <strong>DESCRIÇÃO: </strong>
                        <p>descrição: ...</p>
                        <strong>Valor:</strong>
                        <p>R$ 199.00</p>
                        <button onClick = "" type="button">
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                        </button>
                    </li>
                    <li>
                        <strong>CASO: </strong>
                        <p>Título</p>
                        <strong>DESCRIÇÃO: </strong>
                        <p>descrição: ...</p>
                        <strong>Valor:</strong>
                        <p>R$ 199.00</p>
                        <button onClick = "" type="button">
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                        </button>
                    </li>
                    <li>
                        <strong>CASO: </strong>
                        <p>Título</p>
                        <strong>DESCRIÇÃO: </strong>
                        <p>descrição: ...</p>
                        <strong>Valor:</strong>
                        <p>R$ 199.00</p>
                        <button onClick = "" type="button">
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                        </button>
                    </li>
                </ul>

        </div>
    );
}
