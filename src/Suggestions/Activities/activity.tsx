import React, { useEffect } from 'react';
import './activity.scss';
import { ActivitiesState } from './activityModels';
import ReactTooltip from 'react-tooltip';
import { RouteComponentProps, useHistory, useParams } from 'react-router-dom';

type Props = {
    fetchActivities: (eventId: number) => void;
    activities: ActivitiesState;
};

interface RouteParams {
    id: string;
}

const Activity: React.FC<Props & RouteComponentProps<any>> = ({ activities, fetchActivities }) => {
    const params = useParams<RouteParams>();
    const eventId: number = +params.id;

    useEffect(() => {
        fetchActivities(eventId);
    }, [fetchActivities, eventId]);

    const acvts = activities.activities;

    const history = useHistory();

    const onLogout = () => {
        history.push('/');
    };

    return (
        <>
            <div className="activities">
                {acvts.map((activity) => (
                    <div key={activity.activityTypeId}>
                        <ReactTooltip className="tooltip" />
                        <div className="activity" data-tip={activity.activityTypeName}>
                            {activity.activityTypeDescription}
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={onLogout}>Logout</button>
        </>
    );
};

export default Activity;
