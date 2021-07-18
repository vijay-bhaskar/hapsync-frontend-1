import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import CreateEventComponent from './createEvent';
import { fetchEventTypes } from '../../Suggestions/EventTypes/store/eventTypeActions';
import { fetchActivities } from '../../Suggestions/Activities/store/activityActions';
import { CreateEvent } from '../CreateEvents/store/createEventActions';

const mapStateToProps = (state: RootState) => ({
    events: state.events,
    activityTypes: state.activities,
});

const dispatchActions = {
    fetchEventTypes,
    fetchActivities,
    CreateEvent,
};

export default connect(mapStateToProps, dispatchActions)(CreateEventComponent);
