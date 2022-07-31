import { combineReducers } from "redux";

import authReducer from "./AuthReducers";
import uploadAndPostsReducer from "./UploadAndPostsReducers";

export const reducers = combineReducers({
  authReducer,
  uploadAndPostsReducer,
});
