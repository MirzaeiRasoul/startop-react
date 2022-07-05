import useAuth from './useAuth';
import axios from 'axios';

const useLogout = () => {
    const { setAuth, setIsLogined } = useAuth();

    const logout = async () => {
        try {
            await axios.post('/api/auth/logout/', {}, { 'withCredentials': true });
            setIsLogined(false);
            setAuth({});
        } catch (err) {
            console.error(err.response.data.message);
        }
    }

    return logout;
}

export default useLogout;
