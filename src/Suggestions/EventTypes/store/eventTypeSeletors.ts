import { createSelector } from 'reselect';
import { RootState } from '../../../reducers';

const isLoading = (state: RootState) => state.events.isLoading;
const eventTypes = (state: RootState) => state.events.eventTypes;
const error = (state: RootState) => state.events.error;

export const getEventTypesSelector = createSelector(eventTypes, (eventTypes) => eventTypes);

export const getEventTypeIsLoadingSelector = createSelector(isLoading, (isloading) => isloading);

export const getEventTypeErrorSelector = createSelector(error, (error) => error);
