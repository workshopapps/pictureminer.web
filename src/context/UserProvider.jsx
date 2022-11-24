import React, { createContext, useState } from 'react';
const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', token: '' });
  return (
    <UserContext.Provider
      value={{ user: user, setUser: (user) => setUser(user) }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
