import { ApiManager } from "./ApiManager";

export const findAllActivityTemplate: (
  token: string
) => Promise<any[] | undefined> = async (token) => {
  try {
    const result: any[] = await ApiManager(`/activity-template`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result;
  } catch (error) {
    console.log("Error While Fetching Activity Template ", error);
  }
};

export const findOneActivityTemplate: (
  token: string,
  id: string
) => Promise<string | undefined> = async (token, id) => {
  try {
    const result: string = await ApiManager(`/activity-template/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result;
  } catch (error) {
    console.log("Error While Find One Activity Template ", error);
  }
};

export const createActivityTemplate: (
  token: string,
  data: { name: string }
) => Promise<string | undefined> = async (token, data) => {
  try {
    const result: string = await ApiManager(`/activity-template`, {
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
    const result: string = await ApiManager(`/activity-template/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    })

    return result
  } catch (error) {
    console.log(`Error While Update Activity Template `, error);
  }
};

export const deleteActivityTemplate: (
    token: string,
    id: string
) => Promise<string | undefined> = async (token,id) => {
    try {
        const result: string = await ApiManager(`/activity-template/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.log(`Error While Delete Activity Template `, error)
    }
}