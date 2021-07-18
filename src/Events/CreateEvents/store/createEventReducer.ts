import { CREATE_EVENT, CREATE_EVENT_SUCCESS } from './createEventConstants';
import { CreateEventActions, CreateEventState } from '../../eventModels';

const initialEventState: CreateEventState = {
    message: '',
    error: '',
    isLoading: false,
};

function CreateEventReducer(state = initialEventState, action: CreateEventActions): CreateEventState {
    switch (action.type) {
        case CREATE_EVENT:
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        case CREATE_EVENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                message: action.data,
            };

        default:
            return {
                ...state,
            };
    }
}

export default CreateEventReducer;
