import {createStore} from "@reduxjs/toolkit";
import rootReducer from "./index";

const store = createStore(rootReducer);

export default store;