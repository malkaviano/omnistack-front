import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import Logo from '../../components/Logo';
import AnchorLink from '../../components/AnchorLink';
import SubmitButton from '../../components/SubmitButton';
import { login } from './controller';
import { useHistory } from 'react-router-dom';

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogon(event) {
        event.preventDefault();

        const result = await login({ id });

        if(result) {
            history.push('/profile');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <Logo></Logo>

                <form onSubmit={handleLogon}>
                    <h2>Faça seu logon</h2>

                    <input
                        type="text"
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <SubmitButton>Entrar</SubmitButton>

                    <AnchorLink path="/register">
                        <FiLogIn size="16" color="#e02041"></FiLogIn>
                        Não tenho cadastro
                    </AnchorLink>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}