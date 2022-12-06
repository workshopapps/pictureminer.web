import { useState, useEffect } from 'react';
import UserContext from './UserContext';
import { getLocalStorage } from '../localStorage';
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = getLocalStorage('user');
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
