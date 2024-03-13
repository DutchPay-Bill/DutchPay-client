import { API_URL } from "./access";

interface PhoneLogin {
  phone_number: string;
  password: string;
}

interface ValidatePhone {
  phone_number: string;
}

interface Register {
  fullname: string;
  phone_number: string;
  password: string;
}

export const phoneLogin = async (value: PhoneLogin) => {
  console.log(JSON.stringify(value));
  try {
    const response = await fetch(API_URL + "/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(value),
    });
    return response;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const validatePhone = async (value: ValidatePhone) => {
  console.log(JSON.stringify(value));
  try {
    const response = await fetch(API_URL + "/v1/auth/check-number", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(value),
    });
    return response;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export const register = async (value: Register) => {
  console.log(JSON.stringify(value));
  try {
    const response = await fetch(API_URL + "/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(value),
    });
    return response;
  } catch (error) {
    console.error("An error occurred:", error);
  }
  return;
};

export const googleAuth = async () => {
  try {
    const response = await fetch(API_URL + "/v1/auth/google", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return response;
  } catch (error) {
    console.error("An error occurred:", error);
  }
  return;
};
