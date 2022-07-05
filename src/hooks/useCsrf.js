import axios from 'axios';

const useCsrf = () => {
    const csrf = async () => {
        try {
            const response = await axios.get('/api/auth/csrf/');
            axios.defaults.headers.post['X-CSRF-Token'] = response.data.csrfToken;
        } catch (err) {
            console.error(err.response.data.message);
        }
    };

    return csrf;
}

export default useCsrf;
