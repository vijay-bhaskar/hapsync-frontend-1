import { FETCH_EVENT_TYPES, FETCH_EVENT_TYPES_ERROR, FETCH_EVENT_TYPES_SUCCESS } from './eventTypeConstants';
import {
    FetchEventTypesFailureData,
    FetchEventTypesFailureRequest,
    FetchEventTypesRequest,
    FetchEventTypesSuccessData,
    FetchEventTypesSuccessRequest,
} from '../EventTypeModels';

export const fetchEventTypes = (): FetchEventTypesRequest => ({
    type: FETCH_EVENT_TYPES,
});

export const fetchEventTypesSuccess = (data: FetchEventTypesSuccessData): FetchEventTypesSuccessRequest => ({
    type: FETCH_EVENT_TYPES_SUCCESS,
    data,
});

export const fetchEventTypesError = (data: FetchEventTypesFailureData): FetchEventTypesFailureRequest => ({
    type: FETCH_EVENT_TYPES_ERROR,
    data,
});
