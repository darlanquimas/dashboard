import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp = () => {
  const auth = useContext(AuthContext);

  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (email === "" || userName === "" || name === "" || password === "") {
      alert("Preencha todos os campos");

      return;
    }

    if (repassword !== password) {
      alert("A senha e confirmação de senha devem ser iguais");
      return;
    }

    const hasCreated = await auth.signUp(name, userName, email, password);

    if (hasCreated) {
      navigate("/login");
      return;
    }
    alert("Erro ao criar usuário");
  };

  return (
    <div className="flex justify-center items-center w-full mt-5">
      <form
        className="bg-white p-8 rounded shadow-md max-w-md w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Criar nova conta
        </h2>

        <Input
          name={"name"}
          placeholder={"Fulano da Batata"}
          type={"text"}
          label={"Nome"}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          name={"username"}
          placeholder={"Fulano.Batata"}
          type={"text"}
          label={"Nome de usuário"}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          name={"email"}
          placeholder={"batatafulano@exemplo.com"}
          type={"text"}
          label={"E-mail"}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          name={"password"}
          placeholder={"**********"}
          type={"text"}
          label={"Senha"}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Input
          name={"repasseord"}
          placeholder={"**********"}
          type={"text"}
          label={"Confirmação de senha"}
          onChange={(event) => setRepassword(event.target.value)}
        />

        <Button label={"Cadastrar"} />
      </form>
    </div>
  );
};

export default SignUp;
