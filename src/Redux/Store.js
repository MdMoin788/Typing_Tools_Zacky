import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk"
import { ReducersContents } from "./ContentsReducer";
import { Reducers } from "./Reducer";



const rootReducer = combineReducers({
    typing : Reducers,  
    contents : ReducersContents,  
})


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;
    const middleware = [thunk]
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);
 export const store = createStore(rootReducer, enhancer);


