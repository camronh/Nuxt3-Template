import axios from "axios";

const baseUrl = "http://localhost:8080";

export async function callApi() {
  const response = await axios.get(`${baseUrl}`);
  return response.data.message as string;
}
