export enum Locales {
    ru = "ru",
    en = "en",
    blr = "blr",
    ukr = "ukr"
}

export type ViewState = {
    locale: Locales
}

export enum ViewActions {
    setLocale = "View/Set-Locale"
}