import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { loginService } from "../../services/api/SignIn";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const service = loginService;

  const signIn = async (email: string, password: string) => {
    const data = await service.signIn(email, password);
    if (data?.token) {
      setUser(data);
      setLoggedUser(data);
      return true;
    }
    return false;
  };

  const setLoggedUser = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const isLoggedIn = (): boolean => {
    const user = localStorage.getItem("user");
    if (user != null) {
      return true;
    }
    return false;
  };

  const signOut = (): void => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
