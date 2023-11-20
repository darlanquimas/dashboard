import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const SignIn = () => {
  const auth = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (email && password) {
      const isLoggedIn = await auth.signIn(email, password);
      if (isLoggedIn) {
        navigate("/dashboard");
      }
      return;
    }

    alert("Usuário ou sernha inválidos");
  };
  return (
    <div className="flex justify-center  items-center w-full mt-16">
      <form
        className="bg-white p-8 rounded shadow-md max-w-md w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Acessar sistema</h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            E-mail:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your e-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            label={"Entrar"}
          />

          <Link
            to="#"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Esqueceu a senha?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
