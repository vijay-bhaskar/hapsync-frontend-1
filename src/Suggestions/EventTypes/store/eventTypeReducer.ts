import { FETCH_EVENT_TYPES, FETCH_EVENT_TYPES_ERROR, FETCH_EVENT_TYPES_SUCCESS } from './eventTypeConstants';
import { EventTypesActions, EventTypesState } from '../EventTypeModels';

const initialState: EventTypesState = {
    eventTypes: [],
    error: '',
    isLoading: false,
};

function EventTypesReducer(state = initialState, action: EventTypesActions) {
    switch (action.type) {
        case FETCH_EVENT_TYPES:
            return {
                ...state,
                isLoading: true,
                error: '',
                eventTypes: [],
            };
        case FETCH_EVENT_TYPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                eventTypes: action.data.eventTypes,
            };
        case FETCH_EVENT_TYPES_ERROR:
            return {
                ...state,
                isLoading: true,
                error: action.data.error,
                eventTypes: [],
            };
        default:
            return {
                ...state,
            };
    }
}

export default EventTypesReducer;
