import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function AnchorLink({ path, children }) {
    return (
        <Link className="back-link" to={path}>
            {children}
        </Link>
    );
}