import api from "./config";

const getAllPosts = async () => {
    try {
        const { data } = await api.get('post')
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export {
    getAllPosts
}