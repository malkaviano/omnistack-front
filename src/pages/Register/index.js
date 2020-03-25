import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import Logo from '../../components/Logo';
import AnchorLink from '../../components/AnchorLink';
import SubmitButton from '../../components/SubmitButton';
import { registerOng } from './controller';
import { useHistory } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        await registerOng(data);

        history.push('/');
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <Logo></Logo>

                    <h2>Cadastro</h2>

                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a encontratem os casos da sua ONG.
                    </p>

                    <AnchorLink path="/">
                        <FiArrowLeft size="16" color="#e02041"></FiArrowLeft>
                        Voltar
                    </AnchorLink>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="UF"
                            maxLength="2"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <SubmitButton>Cadastrar</SubmitButton>
                </form>
            </div>
        </div>
    );
}