import { ApiManager } from "../ApiManager";

export const loginUser: (
  username: string,
  password: string
) => Promise<{ token: string } | undefined> = async (username, password) => {
  try {
    const result = await ApiManager(`/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: username,
        password: password,
      },
    });

    return {token: result.data}
  } catch (error) {
    console.log("Error While Login ", error);
  }
};

export const registerUser: (
  username: string,
  password: string
) => Promise<string | undefined> = async (username, password) => {
  try {
    const result: string = await ApiManager(`/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: username,
        password: password,
      },
    });

    return result;
  } catch (error) {
    console.log("Error While Register ", error);
  }
};
