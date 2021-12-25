import axios from "axios";
import { createBrowserHistory } from 'history';
import { FormValues } from "../Models"

export const history = createBrowserHistory();

const API_URL = "http://localhost:8080/FakeApi/auth/";

const login = async (values: FormValues) => {
  try {
    const response = await axios.post(
      API_URL + "signin",
      values
    )
    const { data, data:{accessToken} } = response
    if (accessToken) {
      localStorage.setItem("user", JSON.stringify(data));
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

const logout = async() => {
  try {
    const response = await axios.post(
      API_URL + "logout",
    )
    const { data } = response
    history.push('/login');
    return data;
  } catch (error) {
    console.error(error);
  }
}


export { login, logout }