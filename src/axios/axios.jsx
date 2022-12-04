import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-ecommerce-55ba3.cloudfunctions.net/api",
});

export default instance;
