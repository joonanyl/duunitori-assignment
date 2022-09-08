import axios from "axios";

// Aseta axiokselle baseURL, mikä on tässä tilanteessa JSON-serverin localhost-osoite
const createAxios = axios.create({
    baseURL: "http://localhost:3001"
})
//  Sivun tuloksien haku ja palauta se
export const getJobsPage = async (pageParam = 1) => {
    const response = await createAxios.get(`/jobs?_page=${pageParam}`)
    return response.data
}