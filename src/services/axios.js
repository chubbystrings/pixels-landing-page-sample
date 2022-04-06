import axios from "axios";

export default axios.create({
    baseURL: `https://pixabay.com/api/?key=${process.env.VUE_APP_PIXERBAY_KEY}`,
  });