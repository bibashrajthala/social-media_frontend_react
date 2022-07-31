const authReducer = (
  state = {
    authData: null,
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    // for auth page login and signup implementation
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data })); // put user data in profile of localstorage as well
      return { ...state, authData: action.data, loading: false, error: false };
    case "AUTH_FAILED":
      return { ...state, loading: false, error: true };

    // for InfoCard components logout implementation
    case "LOG_OUT_SUCCESS":
      localStorage.clear(); // clear user's data(profile) from localStorage when he logs out
      return { ...state, authData: null, loading: false, error: false }; // clear authData ie users Data from store
    case "LOG_OUT_FAIL":
      localStorage.clear(); // clear user's data(profile) from localStorage when he logs out
      return { ...state, loading: false, error: true };

    // for profileModal component to implement updating user's imfo
    case "UPDATE_USER_START":
      return { ...state, loading: true, error: false };
    case "UPDATE_USER_SUCCESS":
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...action?.updatedUserData })
      ); // put updated data in localStorage id update local storage also
      return {
        ...state,
        authData: action?.updatedUserData,
        loading: false,
        error: false,
      };
    case "UPDATE_USER_FAIL":
      return { ...state, loading: false, error: true };

    // for follow and unfollow implementation in followerCard
    case "FOLLOW_USER":
      return {
        ...state,
        authData: {
          ...state.authData,
          user: {
            ...state.authData.user,
            following: [...state.authData.user.following, action.data],
          },
        },
      };
    case "UNFOLLOW_USER":
      return {
        ...state,
        authData: {
          ...state.authData,
          user: {
            ...state.authData.user,
            following: [
              ...state.authData.user.following.filter(
                (personId) => personId !== action.data // filtering out the id of person on which unfollow btn is clicked
              ),
            ],
          },
        },
      };

    default:
      return state;
  }
};

export default authReducer;
