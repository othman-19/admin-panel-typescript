import axios from "axios";
import { FormValues } from "../Models"

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


export { login }