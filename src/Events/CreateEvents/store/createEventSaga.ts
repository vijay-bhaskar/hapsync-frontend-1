import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CreateEventSuccess } from './createEventActions';
import { CREATE_EVENT } from './createEventConstants';
import { CreateEventRequestModel } from '../../eventModels';
import { AnyAction } from 'redux';

const createEventCall = (data: CreateEventRequestModel) => {
    return axios.post<string>('http://localhost:8080/pulp-events/event', data);
};

export function* createEvent({ data }: AnyAction) {
    try {
        const response: string = yield call(() => {
            return createEventCall(data);
        });

        yield put(CreateEventSuccess(response));
    } catch (e) {}
}

export function* createEventSaga() {
    yield all([takeLatest(CREATE_EVENT, createEvent)]);
}
