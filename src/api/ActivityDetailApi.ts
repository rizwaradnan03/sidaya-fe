import { ApiManager } from "./ApiManager";

const token = localStorage.getItem("AccessToken")

export const findAllActivityDetail: (activityTemplateId: string) => Promise<
  | { id: string; name: string; description: string; nth_dat: number; time: string; turn: string; created_at: string; updated_at: string }[]
  | undefined
> = async (activityTemplateId) => {
  try {
    const result = await ApiManager(`/activity-detail/find-all/${activityTemplateId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result;
  } catch (error) {
    console.log("Error While Fetching Activity Detail ", error);
  }
};

export const findOneActivityDetail: (
  id: string
) => Promise<
  | { id: string; name: string; created_at: string; updated_at: string }
  | undefined
> = async (id) => {
  try {
    const result = await ApiManager(`/activity-detail/find/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result.data;
  } catch (error) {
    console.log("Error While Find One Activity Detail ", error);
  }
};

export const createActivityDetail: (
  data: { name: string, description: string, activityTemplateId: string }
) => Promise<string | undefined> = async (data) => {
  try {
    const result: string = await ApiManager(`/activity-detail/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    });

    return result;
  } catch (error) {
    console.log(`Error While Create Activity Detail `, error);
  }
};

export const updateActivityDetail: (
  id: string,
  data: { name: string }
) => Promise<string | undefined> = async (id, data) => {
  try {
    const result: string = await ApiManager(`/activity-detail/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    });

    return result;
  } catch (error) {
    console.log(`Error While Update Activity Detail `, error);
  }
};

export const deleteActivityDetail: (
  id: string
) => Promise<string | undefined> = async (id) => {
  try {
    const result: string = await ApiManager(`/activity-detail/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result;
  } catch (error) {
    console.log(`Error While Delete Activity Detail `, error);
  }
};
