import axios from "axios";
import {
  BaseUrl
} from "./BaseURL";
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
const getTaskList = async () => {
  let response = await axios({
    method: "GET",
    url: `${BaseUrl}/todos/display`,
    headers:{
      authorization: `Bearer ${ultimateToken}`
    }

  })
  console.log(response);
  return response;

}
export {
  userSignup,
  userLogin,
  getTaskList
};