import React from 'react';

import './styles.css';

export default function SubmitButton({ children }) {
    return (
        <button type="submit" className="submit-button">{children}</button>
    );
}