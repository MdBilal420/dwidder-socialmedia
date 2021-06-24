import axios from "axios"

const authUrl = "http://localhost:5000/api/auth/"


export const userLogin = (formData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(authUrl, formData)
            console.log(res.data)
            resolve(res)

            if (res.status === 200) {
                localStorage.setItem('token', res.data.token)
            }
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
}

export const getUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const token = localStorage.getItem('token')
            console.log(token)
            if (!token) {
                reject("token not found")
            }
            const res = await axios.get(authUrl, {
                headers: {
                    Authorization: token
                }
            })
            console.log(res)
            resolve(res)

            if (res.status === 200) {
                localStorage.setItem('token', res.data.token)
            }
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
}