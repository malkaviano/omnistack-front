import api from '../../services/api';

export async function login(data) {
    return api.post('sessions', data)
        .then(r => {
            console.log(r);

            localStorage.setItem('ongName', r.data.name);
            localStorage.setItem('ongId', data.id);

            return true;
        })
        .catch(e => {
            console.error(e);

            return false;
        });
}