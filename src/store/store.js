import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk"; // for asynchronously storing and retrieving state data from store
import { reducers } from "../reducers";

// saving all states/data of our redux store to local storage by serializing it in json format
function saveToLocalStorage(store) {
  try {
    const serializedStore = JSON.stringify(store);
    window.localStorage.setItem("store", serializedStore);
  } catch (e) {
    console.log(e);
  }
}

// retrieving  datas/states of our redux store form localStorage(first need to parse the serialized data)
function loadFromLocalStorage() {
  try {
    const serializedStore = window.localStorage.getItem("store");
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // makes our redux store available to react devtools extension of browser
const persistedState = loadFromLocalStorage(); // getting/retrieving the persisted state(not changed even after website refresh ie not back to initail value ) from the local storage using the above function

// creating a redux store to store all state data returned from our reducers
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

// save/subscribe the states of our redux store to localStorage using above function
// evertime there is change in state of store , it will also be reflected in localstorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
