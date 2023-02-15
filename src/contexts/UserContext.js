import { createContext } from "react";
import { useLocalStorage } from "../hooks/localStorage";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  console.log(user);

  const isLoggedIn = !!user;

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
