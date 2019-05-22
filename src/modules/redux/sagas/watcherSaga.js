import { takeEvery, put } from 'redux-saga/effects';
import getElements from './getElements.saga';

function* watcherSaga() {
    yield takeEvery('FETCH_ELEMENTS', getElements);
}

export default watcherSaga;