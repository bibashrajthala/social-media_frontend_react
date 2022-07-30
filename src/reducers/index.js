import { combineReducers } from "redux";

import authReducer from "./AuthReducers";
import uploadPostReducer from "./UploadReducers";

export const reducers = combineReducers({ authReducer, uploadPostReducer });
