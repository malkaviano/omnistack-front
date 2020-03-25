import api from '../../services/api';

export function listIncidents(ongId) {
    return api.get('incidents', {
        headers: {
            Authorization: ongId
        }
    });
}

export function deleteIncident(ongId, incidentId) {
    return api.delete(`incidents/${incidentId}`, {
        headers: {
            Authorization: ongId
        }
    })
    .then(r => true)
    .catch(e => false);
}