import { ApiManager } from "./ApiManager";

const token = localStorage.getItem("AccessToken")

export const findAllActivityTemplate: () => Promise<any[] | undefined> = async () => {
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
  id: string
) => Promise<string> = async (id) => {
  try {
    const result = await ApiManager(`/activity-template/find/${id}`, {
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
  data: { name: string }
) => Promise<string | undefined> = async (data) => {
  try {
    const result: any = await ApiManager(`/activity-template/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data
    });

    return result;
  } catch (error) {
    console.log(`Error While Create Activity Template `, error);
  }
};

export const updateActivityTemplate: (
  id: string,
  data: { name: string }
) => Promise<string | undefined> = async (id, data) => {
  try {
    const result: string = await ApiManager(`/activity-template/update/${id}`, {
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
    id: string
) => Promise<string | undefined> = async (id) => {
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