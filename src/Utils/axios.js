import axios from "axios";
import { BaseUrl } from "./BaseURL";
let ultimateToken;

const userSignup = async (signupDetails) => {
  let response = await axios({
    method: "POST",
    url: `${BaseUrl}/users/signup`,
    data: signupDetails,
  });

  return response;
};

const userLogin = async (loginDetails) => {
  let response = await axios({
    method: "POST",
    url: `${BaseUrl}/users/login`,
    data: loginDetails,
  });

  ultimateToken = response.data.token;
  console.log(ultimateToken);

  return response;
};

// const addTodoData = async (todoUserData) => {
//   let response = await axios({
//     method: "POST",
//     url: `${BaseUrl}/todos/add`,
//     data: todoUserData,
//   });

//   return response;
// };

export { userSignup, userLogin };
