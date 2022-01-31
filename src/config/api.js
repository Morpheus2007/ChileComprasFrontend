import axios from "axios";

const gatewayChileCompraApi = process.env.REACT_APP_GATEWAY_API_CHILECOMPRA_URL;

/* CONFIG AXIOS */
let iAxios = axios.create({
  defaultInterceptors: true,
  headers: { "Access-Control-Allow-Origin": "*" },
});

iAxios.defaults.timeout = 30000;

iAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      !error ||
      !error.response ||
      error.response.status !== 401 ||
      error.toString().includes("404")
    ) {
      return Promise.reject(error);
    } else {
      const prevInstance = error.config;
      return axios(prevInstance);
    }
  }
);

const ApiConfig = {
  iAxios,
  gatewayChileCompraApi,
};

export default ApiConfig;
