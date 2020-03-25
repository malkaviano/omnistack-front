import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import './styles.css';

import Logo from '../../components/Logo';
import ButtonLink from '../../components/ButtonLink';
import { listIncidents, deleteIncident } from './controller';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(
        () => {
            loadIncidents();
        },
        []
    );

    async function handleDeleteIncident(id) {
        const r = await deleteIncident(ongId, id);

        if (r) {
            loadIncidents();
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    function loadIncidents() {
        listIncidents(ongId).then(r => {
            setIncidents(r.data);
        }).catch(e => {
            setIncidents([]);
        });
    }

    return (
        <div className="profile-container">
            <header>
                <Logo></Logo>
                <span>Bem vindo(a), {ongName}</span>

                <ButtonLink path="/incidents/new">
                    Cadastrar novo incidente
                </ButtonLink>

                <button
                    type="button"
                    onClick={handleLogout}
                >
                    <FiPower size="18" color="#e02041"></FiPower>
                </button>
            </header>

            <h2>Casos cadastrados</h2>

            <ul>
                {
                    incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>
                                {incident.title}
                            </p>

                            <strong>Descrição:</strong>
                            <p>
                                {incident.description}
                            </p>

                            <strong>Valor:</strong>
                            <p>
                                {
                                    Intl.NumberFormat(
                                        'pt-BR',
                                        { style: 'currency', currency: 'BRL' }
                                    ).format(incident.value)
                                }
                            </p>

                            <button
                                type="button"
                                onClick={() => handleDeleteIncident(incident.id)}
                            >
                                <FiTrash2 size="20" color="#a8a8b3"></FiTrash2>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}