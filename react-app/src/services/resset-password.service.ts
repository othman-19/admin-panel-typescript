import axios from "axios";
import { resetPassword } from "../Models";
const API_URL = "http://localhost:8080/FakeApi/auth/";

const resetPassword = ({ token, password, confirmPassword }: resetPassword) => {
  return axios.post(`${API_URL}/reset-password`, { token, password, confirmPassword });
}

export { resetPassword }