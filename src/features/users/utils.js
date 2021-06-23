import axios from "axios"

const loginUrl = "http://localhost:5000/api/auth/"

export const getUser = (formData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(loginUrl, formData)
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