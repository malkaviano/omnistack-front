import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import './styles.css';

import Logo from '../../../components/Logo';
import AnchorLink from '../../../components/AnchorLink';
import SubmitButton from '../../../components/SubmitButton';
import { registerNewIncident } from './controller';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        const r = await registerNewIncident(data, ongId);

        if(r) {
            history.push('/profile');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <Logo></Logo>

                    <h2>Cadastrar novo caso</h2>

                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>

                    <AnchorLink path="/profile">
                        <FiArrowLeft size="16" color="#e02041"></FiArrowLeft>
                        Voltar para incidentes
                    </AnchorLink>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        type="text"
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value) }
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value) }
                    />
                    <input
                        type="text"
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value) }
                    />

                    <SubmitButton>Cadastrar</SubmitButton>
                </form>
            </div>
        </div>
    );
}