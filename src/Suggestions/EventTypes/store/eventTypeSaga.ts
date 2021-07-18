import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchEventTypesError, fetchEventTypesSuccess } from './eventTypeActions';
import { FETCH_EVENT_TYPES } from './eventTypeConstants';
import { EventType } from '../EventTypeModels';

const getEventTypes = () => axios.get<{ data: EventType[] }>('http://localhost:8080/pulp-events/suggestions/events');

export function* callEventTypes() {
    try {
        const response: { data: [] } = yield call(getEventTypes);
        yield put(
            fetchEventTypesSuccess({
                eventTypes: response.data,
            }),
        );
    } catch (e) {
        yield put(
            fetchEventTypesError({
                error: 'Failed to Get Event Types',
            }),
        );
    }
}

export default function* fetchEventTypesSaga() {
    yield all([takeLatest(FETCH_EVENT_TYPES, callEventTypes)]);
}
