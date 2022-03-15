import { all } from 'redux-saga/effects';
import { viewSagas } from './view/view.sagas';

export function* rootSagas () {
    yield all([
        viewSagas()
    ])
}