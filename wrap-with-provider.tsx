import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./store";

export default ({ element } : { element: ReactElement}) => {

    const store = makeStore();

    return (
        <Provider store={store}>
            {element}
        </Provider>
    )
}   