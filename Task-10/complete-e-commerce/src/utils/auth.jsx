export const login = (token) => {
    localStorage.setItem('authToken', token);
  };
  
  export const logout = () => {
    localStorage.removeItem('authToken');
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
  };
  