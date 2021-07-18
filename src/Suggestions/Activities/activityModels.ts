import { FETCH_ACTIVITIES, FETCH_ACTIVITIES_ERROR, FETCH_ACTIVITIES_SUCCESS } from './store/activityConstants';

export interface Activity {
    activityTypeId: number;
    activityTypeName: string;
    activityTypeDescription: string;
    cost: number;
}

export interface ActivitiesState {
    isLoading: boolean;
    activities: Activity[];
    error: string | null;
}

export interface FetchActivitiesSuccessData {
    activities: Activity[];
}

export interface FetchActivitiesFailureData {
    error: string;
}

export interface FetchActivitiesRequest {
    type: typeof FETCH_ACTIVITIES;
    eventId: number;
}

export type FetchActivitiesSuccessRequest = {
    type: typeof FETCH_ACTIVITIES_SUCCESS;
    data: FetchActivitiesSuccessData;
};

export type FetchActivitiesFailureRequest = {
    type: typeof FETCH_ACTIVITIES_ERROR;
    data: FetchActivitiesFailureData;
};

export type ActivitiesActions = FetchActivitiesRequest | FetchActivitiesSuccessRequest | FetchActivitiesFailureRequest;
