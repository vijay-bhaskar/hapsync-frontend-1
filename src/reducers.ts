import { combineReducers } from 'redux';
import ActivitiesReducer from './Suggestions/Activities/store/activityReducer';
import EventTypesReducer from './Suggestions/EventTypes/store/eventTypeReducer';
import EventReducer from './Events/CreateEvents/store/createEventReducer';

const rootReducer = combineReducers({
    events: EventTypesReducer,
    activities: ActivitiesReducer,
    createEvent: EventReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
