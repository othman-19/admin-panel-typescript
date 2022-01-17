import axios from "axios";
import { ForgotEmail } from "../Models"

const API_URL = "http://localhost:8080/FakeApi/auth/";

const forgotPassword = async (values: ForgotEmail) => {
  try {
    const response = await axios.post(
      API_URL + "forgot-password",
      values
    )
    const { data } = response
    return data;
  } catch (error) {
    console.error(error);
  }
}
export { forgotPassword }