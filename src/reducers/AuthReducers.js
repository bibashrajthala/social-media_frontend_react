const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    // for auth page login and signup implementation
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
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

    default:
      return state;
  }
};

export default authReducer;
