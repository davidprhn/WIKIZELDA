import api from "./config";

const signUp = async (dataForm) => {
    try {
        const { data } = await api.post('auth/signup', dataForm)
        console.log(data)
        localStorage.setItem('token', data.result.token)
        localStorage.setItem('role', data.result.user.role)
        return data
    } catch (error) {
        console.error(error)
    }
}

const login = async (dataForm) => {
    try {
        const { data } = await api.post('auth/login', dataForm)
        localStorage.setItem('token', data.result)
        localStorage.setItem('role', data.role)
        return data
    } catch (error) {
        console.log(error)
    }
}

export {
    signUp,
    login
}