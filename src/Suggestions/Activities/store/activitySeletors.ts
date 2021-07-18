import { createSelector } from 'reselect';
import { RootState } from '../../../reducers';

const isLoading = (state: RootState) => state.activities.isLoading;
const activities = (state: RootState) => state.activities.activities;
const error = (state: RootState) => state.activities.error;

export const getActivitiesSelector = createSelector(activities, (activities) => activities);

export const getActivityIsLoadingSelector = createSelector(isLoading, (isloading) => isloading);

export const getActivityErrorSelector = createSelector(error, (error) => error);
