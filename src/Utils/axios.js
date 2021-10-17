import axios from "axios";
import { BaseUrl } from "./BaseURL";

const userLogin = async (loginDetails) => {
  let response = await axios({
    method: "post",
    url: `${BaseUrl}/users/login`,
    data: loginDetails,
  });

  let ultimateToken = response.data.token;
  console.log(ultimateToken);

  return response;
};

export { userLogin };
