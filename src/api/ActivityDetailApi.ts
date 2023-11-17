import { ApiManager } from "./ApiManager";

export const findAllActivityTemplate: (
  token: string
) => Promise<
  | { id: string; name: string; created_at: string; updated_at: string }[]
  | undefined
> = async (token) => {
  try {
    const result = await ApiManager(`/activity-template`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result.data;
  } catch (error) {
    console.log("Error While Fetching Activity Template ", error);
  }
};

export const findOneActivityTemplate: (
  token: string,
  id: string
) => Promise<
  | { id: string; name: string; created_at: string; updated_at: string }
  | undefined
> = async (token, id) => {
  try {
    const result = await ApiManager(`/activity-template/find/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result.data;
  } catch (error) {
    console.log("Error While Find One Activity Template ", error);
  }
};

export const createActivityTemplate: (
  token: string,
  data: { name: string }
) => Promise<string | undefined> = async (token, data) => {
  try {
    const result: string = await ApiManager(`/activity-template/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    });

    return result;
  } catch (error) {
    console.log(`Error While Create Activity Template `, error);
  }
};

export const updateActivityTemplate: (
  token: string,
  id: string,
  data: { name: string }
) => Promise<string | undefined> = async (token, id, data) => {
  try {
    const result: string = await ApiManager(`/activity-template/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    });

    return result;
  } catch (error) {
    console.log(`Error While Update Activity Template `, error);
  }
};

export const deleteActivityTemplate: (
  token: string,
  id: string
) => Promise<string | undefined> = async (token, id) => {
  try {
    const result: string = await ApiManager(`/activity-template/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result;
  } catch (error) {
    console.log(`Error While Delete Activity Template `, error);
  }
};
