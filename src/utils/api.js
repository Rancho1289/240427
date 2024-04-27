import axios from "axios";

const api = axios.create({
  // baseURL: `${process.env.REACT_APP_BACKEND_URL}/api`,
  baseURL: `${process.env.REACT_APP_BACKEND_PROXY}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 * console.log all requests and responses
 */
api.interceptors.request.use(
  (request) => {
    // console.log("Starting Request", request);
    return request;
  },
  function (error) {
    // console.log("REQUEST ERROR", error);
  }
);

api.interceptors.response.use(
  (response) => {
    // console.log("Response:", response);
    return response;
  },
  function (error) {
    error = error.response.data;
    // console.log("RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export default api;


// import axios from "axios";

// const api = axios.create({
//   baseURL: `${process.env.REACT_APP_BACKEND_URL}/api`,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// /**
//  * console.log all requests and responses
//  */
// api.interceptors.request.use(
//   (request) => {
//     // console.log("Starting Request", request);
//     return request;
//   },
//   function (error) {
//     // console.log("REQUEST ERROR", error);
//     return Promise.reject(error);  // 에러를 다음 체인으로 넘깁니다.
//   }
// );

// api.interceptors.response.use(
//   (response) => {
//     // console.log("Response:", response);
//     return response;
//   },
//   function (error) {
//     // error.response가 undefined일 수 있으므로 안전하게 처리
//     if (error.response && error.response.data) {
//       // console.log("RESPONSE ERROR", error.response.data);
//       return Promise.reject(error.response.data);
//     } else {
//       // console.log("RESPONSE ERROR", error);
//       return Promise.reject(error);  // error 자체를 reject할 경우를 대비
//     }
//   }
// );

// export default api;
