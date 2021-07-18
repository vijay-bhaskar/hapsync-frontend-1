import { FETCH_EVENT_TYPES, FETCH_EVENT_TYPES_ERROR, FETCH_EVENT_TYPES_SUCCESS } from './store/eventTypeConstants';

export interface EventType {
    eventTypeId: number;
    eventTypeName: string;
    eventTypeDescription: string;
}

export interface EventTypesState {
    isLoading: boolean;
    eventTypes: EventType[];
    error: string | null;
}

export interface FetchEventTypesSuccessData {
    eventTypes: EventType[];
}

export interface FetchEventTypesFailureData {
    error: string;
}

export interface FetchEventTypesRequest {
    type: typeof FETCH_EVENT_TYPES;
}

export type FetchEventTypesSuccessRequest = {
    type: typeof FETCH_EVENT_TYPES_SUCCESS;
    data: FetchEventTypesSuccessData;
};

export type FetchEventTypesFailureRequest = {
    type: typeof FETCH_EVENT_TYPES_ERROR;
    data: FetchEventTypesFailureData;
};

export type EventTypesActions = FetchEventTypesRequest | FetchEventTypesSuccessRequest | FetchEventTypesFailureRequest;
