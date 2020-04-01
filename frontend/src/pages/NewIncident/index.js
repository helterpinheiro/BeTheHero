import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api'

import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('')

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        }
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch {
            alert('Erro ao cadastrar caso, tente novamente')
        }
    }

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
                <form onSubmit = {handleSubmit}>
                    <input placeholder = "Titulo do caso" value = { title } onChange = {e => setTitle(e.target.value)} ></input>
                    <textarea placeholder = "Descrição" value = { description } onChange = {e => setDescription(e.target.value)}></textarea>
                    <input placeholder = "Valor em reais" value = { value } onChange = {e => setValue(e.target.value)}></input>
                    <button className = "button" type = "submit">Registrar</button>
                </form>
            </div>
        </div>
    );
}