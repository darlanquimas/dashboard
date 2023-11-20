import { Api } from "..";

const signUp = async (
  name: string,
  userName: string,
  email: string,
  password: string
): Promise<boolean> => {
  try {
    const response = await Api.post("/users", {
      name,
      userName,
      email,
      password,
      passwordConfirm: password,
    });

    return response.status === 201 ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const registerService = { signUp };
