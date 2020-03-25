import api from '../../../services/api';

export async function registerNewIncident(data, ongId) {
    return api.post(
        'incidents',
        data,
        {
            headers: {
                Authorization: ongId
            }
        })
        .then(r => true)
        .catch(e => false);
}
