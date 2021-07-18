import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import Activity from './activity';
import { fetchActivities } from './store/activityActions';

const mapStateToProps = (state: RootState) => ({
    activities: state.activities,
});

const dispatchActions = {
    fetchActivities,
};

export default connect(mapStateToProps, dispatchActions)(Activity);
