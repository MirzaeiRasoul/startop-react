import axios from 'axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth, setLogin } = useAuth();

    const refresh = async () => {
        try {
            const response = await axios.post('/api/auth/refresh/', {}, { withCredentials: true });
            setLogin();
            setAuth({ accessToken: response.data.accessToken });
        } catch (err) {
            console.error(err.response.data.message);
        }
    }

    return refresh;
}

export default useRefreshToken;
