import { State } from "../types";

const locale = (state: State) => state.view.locale;

export const viewSelect = {
    locale
}