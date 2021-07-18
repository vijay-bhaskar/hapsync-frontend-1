import React, { useEffect } from 'react';
import './eventType.scss';
import { EventTypesState } from './EventTypeModels';
import ReactTooltip from 'react-tooltip';
import { useHistory } from 'react-router-dom';

type Props = {
    fetchEventTypes: () => void;
    events: EventTypesState;
};

const EventType: React.FC<Props> = ({ events, fetchEventTypes }) => {
    useEffect(() => {
        fetchEventTypes();
    }, [fetchEventTypes]);
    const eventTypes = events.eventTypes;

    const history = useHistory();

    const onLogout = () => {
        history.push('/');
    };

    const onEventClick = (id: number) => {
        history.push(`/suggestions/events/${id}/activities`);
    };

    return (
        <>
            <div className="eventTypes">
                {eventTypes.map((type) => (
                    <div key={type.eventTypeId}>
                        <ReactTooltip className="tooltip" />
                        <button
                            className="eventType"
                            data-tip={type.eventTypeDescription}
                            onClick={() => onEventClick(type.eventTypeId)}
                        >
                            {type.eventTypeName}
                        </button>
                    </div>
                ))}
            </div>
            <button onClick={onLogout}>Logout</button>
        </>
    );
};

export default EventType;
