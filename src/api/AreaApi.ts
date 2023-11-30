import { ApiManager } from "./ApiManager";

const token = localStorage.getItem("AccessToken")

export const findAllArea: () => Promise<any[] | undefined > = async () => {
    try {
        const result: any[] = await ApiManager(`/area`, {
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

export const findOneArea: (id: string) => Promise<string | undefined> = async (id) => {
    try {
        const result: string = await ApiManager(`/area/find${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.log('Error While Find One Area ', error)
    }
}

export const createArea: (data: {name: string, capacity: number, feed: number, volume: number, weight: number, }) => Promise<string | undefined> = async (id) => {
    try {
        const result: string = await ApiManager(`/area/find${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.log('Error While Find One Area ', error)
    }
}