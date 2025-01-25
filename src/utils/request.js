import axios from "axios";

const request = axios.create({
  baseURL: "https://localhost",
  timeout: 100000,
})

export default request;
