import axios from 'axios';

const tokenName = 'auth-token';

const Auth = {
  setToken: (token) => localStorage.setItem(tokenName, token),
  getToken: () => localStorage.getItem(tokenName),
  removeToken: () => localStorage.removeItem(tokenName),
  isLoggedIn: async () => {
    if (Auth.getToken()) {
      try {
        await axios.get('http://127.0.0.1:5000/profile/', { headers: { Authorization: `bearer ${Auth.getToken()}` } });
        return true;
      } catch (err) { return false; }
    } else { return false; }
  },
  getProfile: async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/profile/',
        { headers: { Authorization: `bearer ${Auth.getToken()}` } }
      );
      return response.data;
    } catch (err) {
      return err.response.data.message;
    }
  },
  // getExpTime: () => {
  //   console.log('getExpTime');
  // }
}

export default Auth;