import api from '../../services/api';

export async function registerOng(data) {
    return api.post('ongs', data)
        .then(r => {
            return r;
        })
        .catch(e => {
            return e;
        });
}
