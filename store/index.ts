import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./reducer";
import { rootSagas } from "./sagas";

const sagaMiddleWare = createSagaMiddleware();

export const makeStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleWare))
    );

    sagaMiddleWare.run(rootSagas);

    return store
};
