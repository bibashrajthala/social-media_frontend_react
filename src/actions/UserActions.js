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

export const followUser = (id, data) => async (dispatch) => {
  await UserAPI.followUser(id, data);
  dispatch({ type: "FOLLOW_USER", data: id });
};

export const unfollowUser = (id, data) => async (dispatch) => {
  await UserAPI.unfollowUser(id, data);
  dispatch({ type: "UNFOLLOW_USER", data: id });
};
