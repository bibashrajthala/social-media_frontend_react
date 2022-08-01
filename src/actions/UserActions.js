import * as UserAPI from "../api/UserRequests";
import { logout } from "./AuthActions";

export const updateUser = (userId, userData) => async (dispatch) => {
  dispatch({ type: "UPDATE_USER_START" });
  try {
    const { data } = await UserAPI.updateUser(userId, userData);
    dispatch({ type: "UPDATE_USER_SUCCESS", updatedUserData: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPDATE_USER_FAIL" });
    // console.log(error.response.data);
    if (error.response.data) {
      dispatch(logout());
    }
  }
};

export const followUser = (id, data) => async (dispatch) => {
  try {
    await UserAPI.followUser(id, data);
    dispatch({ type: "FOLLOW_USER", data: id });
  } catch (error) {
    console.log(error);
    // console.log(error.response.data);
    if (error.response.data) {
      dispatch(logout());
    }
  }
};

export const unfollowUser = (id, data) => async (dispatch) => {
  try {
    await UserAPI.unfollowUser(id, data);
    dispatch({ type: "UNFOLLOW_USER", data: id });
  } catch (error) {
    console.log(error);
    // console.log(error.response.data);
    if (error.response.data) {
      dispatch(logout());
    }
  }
};
