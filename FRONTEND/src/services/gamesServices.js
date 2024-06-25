import api from "./config";


const getOneGame = async (id) => {
    try {
        const { data } = await api.get(`game/${id}`)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export {
    getOneGame
}