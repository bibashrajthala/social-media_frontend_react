const uploadAndPostsReducer = (
  state = { posts: [], uploading: false, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, uploading: true, error: false };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.postData, ...state.posts],
        uploading: false,
        loading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };
    case "RETREIVING_POSTS_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.posts,
        loading: false,
        error: false,
      };
    case "RETREIVING_POSTS_FAIL":
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default uploadAndPostsReducer;
