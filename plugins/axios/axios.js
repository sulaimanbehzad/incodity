import axios from "axios";

import config from "./config";
import middleware from "./middleware";

const axiosInstance = axios.create(config);
middleware.register(axiosInstance);

export default axiosInstance;
