const BASE_URL = process.env.REACT_APP_SERVICE_URL;

export const API_URL = {
  auth: {
    login: `${BASE_URL}/api/auth/login`,
    logout: `${BASE_URL}/api/auth/logout`,
    tokenUser: `${BASE_URL}/api/auth/getUserByToken`,
  },
  
};
