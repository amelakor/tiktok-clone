import axios from "axios";

const instance = axios.create({
  baseURL: "https://titktok-mern.herokuapp.com/",
});

export default instance;
