import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function ButtonLink({ path, children }) {
    return (
        <Link className="button-link" to={path}>
            {children}
        </Link>
    );
}