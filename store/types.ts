import { ViewState } from "./view/view.types"

export type RAction = {
    type: string,
    payload?: any
}

export type State = {
    view: ViewState
}