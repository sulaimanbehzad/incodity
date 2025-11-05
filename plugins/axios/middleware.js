const onSuccessResponse = (response) => response.data;
const onFailedResponse = (error) => {
  console.log(error);
  throw error;
};

const register = (axios) => {
  axios.interceptors.response.use(onSuccessResponse, onFailedResponse);
};

export default { register };

