import * as postsAPI from "../api/PostRequests";

export const getTimelinePosts = (userId) => async (dispatch) => {
  dispatch({ type: "RETREIVING_POSTS_START" });
  try {
    const { data } = await postsAPI.getTimelinePosts(userId);
    dispatch({ type: "RETREIVING_POSTS_SUCCESS", posts: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_POSTS_FAIL" });
  }
};
