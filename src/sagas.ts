import { all, fork } from 'redux-saga/effects';
import { createEventSaga } from './Events/CreateEvents/store/createEventSaga';
import fetchActivitiesSaga from './Suggestions/Activities/store/activitySaga';
import fetchEventTypesSaga from './Suggestions/EventTypes/store/eventTypeSaga';

export default function* rootSaga() {
    yield all([
        fork(fetchEventTypesSaga),
        fork(fetchActivitiesSaga),
        fork(createEventSaga),
        // fork(createEventActivitiesSaga),
    ]);
}
