import * as UserAPI from "../api/UserRequests";

export const updateUser = (userId, userData) => async (dispatch) => {
  dispatch({ type: "UPDATE_USER_START" });
  try {
    const { data } = await UserAPI.updateUser(userId, userData);
    dispatch({ type: "UPDATE_USER_SUCCESS", updatedUserData: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPDATE_USER_FAIL" });
  }
};
