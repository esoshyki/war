import { Locales, ViewState } from "./view.types"
import { RAction } from '../types'

const initState: ViewState = {
    locale: Locales.en
}

export const viewReducer = (
    state = initState,
    action: RAction
) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return state
    }
}
