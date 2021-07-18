import { FETCH_ACTIVITIES, FETCH_ACTIVITIES_ERROR, FETCH_ACTIVITIES_SUCCESS } from './activityConstants';
import {
    FetchActivitiesFailureData,
    FetchActivitiesFailureRequest,
    FetchActivitiesRequest,
    FetchActivitiesSuccessData,
    FetchActivitiesSuccessRequest,
} from '../activityModels';

export const fetchActivities = (eventId: number): FetchActivitiesRequest => ({
    type: FETCH_ACTIVITIES,
    eventId,
});

export const fetchActivitiesSuccess = (data: FetchActivitiesSuccessData): FetchActivitiesSuccessRequest => ({
    type: FETCH_ACTIVITIES_SUCCESS,
    data,
});

export const fetchActivitiesError = (data: FetchActivitiesFailureData): FetchActivitiesFailureRequest => ({
    type: FETCH_ACTIVITIES_ERROR,
    data,
});
