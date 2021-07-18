import axios from 'axios';
import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchActivitiesError, fetchActivitiesSuccess } from './activityActions';
import { FETCH_ACTIVITIES } from './activityConstants';
import { Activity } from '../activityModels';

const getActivities = (id: number) => {
    return axios.get<{ data: Activity[] }>(`http://localhost:8080/pulp-events/suggestions/events/${id}/activities`);
};

export function* callActivities({ eventId }: AnyAction) {
    try {
        const response: { data: [] } = yield call(() => {
            return getActivities(eventId);
        });
        yield put(
            fetchActivitiesSuccess({
                activities: response.data,
            }),
        );
    } catch (e) {
        yield put(
            fetchActivitiesError({
                error: 'Failed to Get Activities',
            }),
        );
    }
}

export default function* fetchActivitiesSaga() {
    yield all([takeLatest(FETCH_ACTIVITIES, callActivities)]);
}
