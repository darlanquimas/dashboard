import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { User } from "../../types/User";

const NavBar = () => {
  const auth = useContext(AuthContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const handleUserMenuToggle = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  useEffect(() => {
    setUserMenuOpen(false);
    if (auth.isLoggedIn() && auth.user) {
      setUser(auth.user);
    } else {
      setUser(null);
    }
  }, [auth]);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="#" className="text-3xl font-bold">
        Logo Here.
      </Link>

      <ul className="space-x-5 flex  ">
        {auth.isLoggedIn() && (
          <>
            <li className="pl-3 pr-3 hover:bg-gray-500">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="pl-3 pr-3 hover:bg-gray-500">
              <Link to="#">Cadastros</Link>
            </li>
            <li>
              <span
                className="cursor-pointer pl-3 pr-3 hover:bg-gray-500"
                onClick={handleUserMenuToggle}
              >
                Olá! {user?.name}
              </span>

              {userMenuOpen && (
                <div className=" absolute first-letter:e top-full right-3 mt-2 bg-gray-800 text-center  rounded shadow-md z-10 w-28 ">
                  <ul className="mt-2 mb-2 ">
                    <li className="mb-1 cursor-pointer pl-0 pr-0 hover:bg-gray-500">
                      <Link to="#">Perfil</Link>
                    </li>
                    <li>
                      <span
                        className="cursor-pointer  pl-3 pr-3 hover:bg-gray-500 "
                        onClick={handleLogout}
                      >
                        Sair
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </>
        )}

        {!auth.isLoggedIn() && (
          <div className=" flex flex-row">
            <div className=" pl-3 pr-3 hover:bg-gray-500">
              <Link to="/login">Login</Link>
            </div>
            <div className=" pl-3 pr-3 hover:bg-gray-500">
              <Link to="/register">Registrar</Link>
            </div>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
