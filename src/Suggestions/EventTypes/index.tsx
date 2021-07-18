import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import EventType from './eventType';
import { fetchEventTypes } from './store/eventTypeActions';

const mapStateToProps = (state: RootState) => ({
    events: state.events,
});

const dispatchActions = {
    fetchEventTypes,
};

export default connect(mapStateToProps, dispatchActions)(EventType);
