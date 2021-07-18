import { CREATE_EVENT, CREATE_EVENT_SUCCESS } from './CreateEvents/store/createEventConstants';

export interface EventFormData {
    name: string;
    userId: number;
    eventTypeId: { label: string; value: string };
    description?: string;
    count?: number;
    location?: string;
    date?: Date;
    owner?: number;
    budget?: number;
    activities?: { label: string; value: string }[];
}

export interface CreateEventRequestModel {
    name: string;
    userId: number;
    eventTypeId: number;
    description?: string;
    count?: number;
    location?: string;
    date?: Date;
    owner?: number;
    budget?: number;
    createdDate: Date;
    activities?: ActivityRequestModel[];
}

export interface ActivityRequestModel {
    activityTypeId: number;
    owner?: number;
    dueDate?: Date;
    createdDate?: Date;
    vendors?: VendorRequestModel[];
    cost?: number;
}

export interface VendorRequestModel {
    vendorId: number;
    budget: number;
    status: number;
    vendorRank: number;
}

export type CreateEventRequest = {
    type: typeof CREATE_EVENT;
    data: CreateEventRequestModel;
};

export type CreateEventSuccessRequest = {
    type: typeof CREATE_EVENT_SUCCESS;
    data: string;
};

export interface CreateEventState {
    isLoading: boolean;
    message: string | null;
    error: string | null;
}

export type CreateEventActions = CreateEventRequest | CreateEventSuccessRequest;
