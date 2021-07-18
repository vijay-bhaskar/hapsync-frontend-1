import { CREATE_EVENT, CREATE_EVENT_SUCCESS } from './createEventConstants';

import { CreateEventRequest, CreateEventRequestModel, CreateEventSuccessRequest } from '../../eventModels';

export const CreateEvent = (data: CreateEventRequestModel): CreateEventRequest => ({
    type: CREATE_EVENT,
    data,
});

export const CreateEventSuccess = (data: string): CreateEventSuccessRequest => ({
    type: CREATE_EVENT_SUCCESS,
    data,
});
