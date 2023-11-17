import { Api } from "..";
import { User } from "../../../types/User";

const signIn = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const response = await Api.post("/login", {
      email: email,
      password: password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const loginService = { signIn };
