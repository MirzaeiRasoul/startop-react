import useAuth from './useAuth';
import axios from 'axios';

const useRefreshToken = () => {
    const { setAuth, setIsLogined } = useAuth();

    const refresh = async () => {
        try {
            const response = await axios.post('/api/auth/refresh/');
            setIsLogined(true);
            setAuth({ accessToken: response.data.accessToken });
        } catch (err) {
            console.error(err.response.data.message);
        }
    }

    return refresh;
}

export default useRefreshToken;
