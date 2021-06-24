import { getUserFail, getUserPending, getUserSuccess } from "./userSlice";
import { getUser } from '../../api/userApi'


export const getUserProfile = () => async (dispatch) => {
    try {
        dispatch(getUserPending())

        const res = await getUser()

        if (res.data._id) {
            return dispatch(getUserSuccess(res.data))
        }

        dispatch(getUserFail("User not found"))

    } catch (error) {
        dispatch(getUserFail(error.message))
    }
}
