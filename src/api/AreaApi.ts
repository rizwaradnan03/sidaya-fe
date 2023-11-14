import { ApiManager } from "./ApiManager";

export const findAllArea: (token: string) => Promise<string[] | undefined > = async (token) => {
    try {
        const result: string[] = await ApiManager(`/area`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.log('Error While Find All Area ', error)
    }
}

export const findOneArea: (token: string, id: string) => Promise<string | undefined> = async (token,id) => {
    try {
        const result: string = await ApiManager(`/area/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.log('Error While Find All Area ', error)
    }
}