import useAuth from './useAuth';
import axios from '../utils/axios';

const useRefresh = () => {
    const { setAuth, setIsLogined } = useAuth();

    const refresh = async () => {
        try {
            const response = await axios.post('/api/auth/refresh/');
            setIsLogined(true);
            setAuth({ accessToken: response.data.accessToken });
        } catch (err) {
            throw err;
        }
    }

    return refresh;
}

export default useRefresh;
