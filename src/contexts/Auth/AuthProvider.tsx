import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { loginService } from "../../services/api/SignIn";
import { registerService } from "../../services/api/SignUp";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = loginService;
  const register = registerService;

  const signIn = async (email: string, password: string) => {
    const data = await login.signIn(email, password);
    if (data?.token) {
      setUser(data);
      setLoggedUser(data);
      return true;
    }
    return false;
  };

  const signUp = async (
    name: string,
    userName: string,
    email: string,
    password: string
  ) => {
    const data = await register.signUp(name, userName, email, password);
    if (data) {
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
    <AuthContext.Provider value={{ user, signUp, signIn, signOut, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
