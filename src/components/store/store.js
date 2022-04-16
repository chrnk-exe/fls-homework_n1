import { createStore, combineReducers } from "redux";
import { infoReducer } from "./infoReducer";
import { favoriteReducer } from "./favoriteReducer";

const rootReducer = combineReducers({
    info: infoReducer,
    favorits: favoriteReducer,
})

export const store = createStore(rootReducer)