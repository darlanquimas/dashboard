import axios, { AxiosError, AxiosResponse } from "axios";
import { Environment } from "../../environment/indes";

export const Api = axios.create({
  baseURL: Environment.URL_BASE,
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === "Network Error") {
    return Promise.reject(new Error("Erro de rede, verifique sua conexão"));
  }

  if (error.response?.status === 401) {
    //faça algo aqui
  }

  return Promise.reject(error);
};

export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};
