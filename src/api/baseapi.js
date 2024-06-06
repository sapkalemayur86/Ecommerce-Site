import axios from "axios";

const MyStoreApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default MyStoreApi;
