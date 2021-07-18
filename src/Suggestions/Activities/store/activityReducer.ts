import { FETCH_ACTIVITIES, FETCH_ACTIVITIES_ERROR, FETCH_ACTIVITIES_SUCCESS } from './activityConstants';
import { ActivitiesActions, ActivitiesState } from '../activityModels';

const initialState: ActivitiesState = {
    activities: [],
    error: '',
    isLoading: false,
};

function ActivitiesReducer(state = initialState, action: ActivitiesActions) {
    switch (action.type) {
        case FETCH_ACTIVITIES:
            return {
                ...state,
                isLoading: true,
                error: '',
                activities: [],
            };
        case FETCH_ACTIVITIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                activities: action.data.activities,
            };
        case FETCH_ACTIVITIES_ERROR:
            return {
                ...state,
                isLoading: true,
                error: action.data.error,
                activities: [],
            };
        default:
            return {
                ...state,
            };
    }
}

export default ActivitiesReducer;
