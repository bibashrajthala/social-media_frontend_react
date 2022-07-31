import * as AuthAPI from "../api/AuthRequests";

export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthAPI.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAILED" });
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthAPI.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAILED" });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "LOG_OUT_SUCCESS" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOG_OUT_FAIL" });
  }
};

// will use authReducer (for UserActions as well as it contains the data of the users)
