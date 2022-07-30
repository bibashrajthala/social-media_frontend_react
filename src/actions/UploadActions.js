import * as UploadAPI from "../api/UploadRequests";

export const uploadImage = (img) => async (dispatch) => {
  try {
    console.log("image upload started");
    await UploadAPI.uploadImage(img);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (post) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await UploadAPI.uploadPost(post);
    dispatch({ type: "UPLOAD_SUCCESS", postData: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
