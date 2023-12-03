import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.boredapi.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export { instance };
