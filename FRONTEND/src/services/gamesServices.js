import api from "./config";


const getOneGame = async (id) => {
    try {
        const { data } = await api.get(`game/${id}`)
        return data.result
    } catch (error) {
        console.log(error)
    }
}

const getPostsByGameId = async (gameId) => {
    try {
        const { data } = await api.get(`game/${gameId}/posts`);
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

export {
    getOneGame,
    getPostsByGameId
};