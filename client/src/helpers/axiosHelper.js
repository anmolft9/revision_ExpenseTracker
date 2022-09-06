import axios from "axios";

const rootUrl = "http://localhost:8000";
const userEndPoint = rootUrl + "/api/v1/user";
const transactionEndPoint = rootUrl + "/api/v1/transaction";

//////user api
export const postNewUser = async (obj) => {
  try {
    const response = await axios.post(userEndPoint, obj);
    console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const loginUser = async (obj) => {
  try {
    const response = await axios.post(userEndPoint + "/login", obj);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

/////transction api

export const postNewTransaction = async (obj) => {
  try {
    const response = await axios.post(transactionEndPoint, obj);
    // console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getTransaction = async () => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const userId = user._id;
    const response = await axios.get(transactionEndPoint, {
      headers: {
        authorization: userId,
      },
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// delete transaction
export const deleteTransaction = async (_id) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const userId = user._id;
    const response = await axios.delete(transactionEndPoint + "/" + _id, {
      headers: {
        authorization: userId,
      },
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
