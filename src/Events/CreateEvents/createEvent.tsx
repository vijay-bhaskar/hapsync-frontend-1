import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ActivityRequestModel, CreateEventRequestModel, EventFormData } from '../eventModels';
import Input from '@material-ui/core/input';
import Select from 'react-select';
import { EventTypesState } from '../../Suggestions/EventTypes/EventTypeModels';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './createEvent.scss';
import CreatableSelect from 'react-select/creatable';
import { ActivitiesState, Activity } from '../../Suggestions/Activities/activityModels';

type Props = {
    fetchEventTypes: () => void;
    events: EventTypesState;
    fetchActivities: (id: number) => void;
    activityTypes: ActivitiesState;
    CreateEvent: (data: CreateEventRequestModel) => void;
};

const CreateEventComponent: React.FC<Props> = ({
    events,
    activityTypes,
    fetchEventTypes,
    fetchActivities,
    CreateEvent,
}) => {
    useEffect(() => {
        fetchEventTypes();
    }, [fetchEventTypes]);

    const eventTypes = events.eventTypes;
    const [evntTypeId, setEvntTypeId] = useState<number>();
    const [actvts, setActvts] = useState<ActivityRequestModel[]>();
    const { handleSubmit, control } = useForm<EventFormData>();

    const onEventTypeChange = (eventTypeId: number | undefined) => {
        if (eventTypeId != undefined) {
            setEvntTypeId(eventTypeId);
            fetchActivities(eventTypeId);
            setActvts([]);
        }
        console.log(eventTypeId);
    };

    const handleActivitiesCreate = (activityTypes: any) => {
        const activities: ActivityRequestModel[] = [];
        activityTypes.forEach((actvty: Activity) => {
            const activity: ActivityRequestModel = {
                activityTypeId: actvty.activityTypeId,
                cost: actvty.cost,
                createdDate: new Date(),
                owner: 1,
                dueDate: new Date(),
            };
            activities.push(activity);
        });
        setActvts(activities);
        console.log(actvts);
    };

    const onSubmit = (data: EventFormData) => {
        console.log(data);
        const eventData: CreateEventRequestModel = {
            name: data.name,
            eventTypeId: evntTypeId ? evntTypeId : 0,
            userId: 1,
            date: data.date,
            location: data.location,
            createdDate: new Date(),
            owner: data.owner,
            budget: data.budget,
            activities: actvts,
        };

        CreateEvent(eventData);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="eventform">
                    <div>
                        <section>
                            <label>Name</label>
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <Input disableUnderline className="input" {...field} />}
                            />
                        </section>
                    </div>
                    <div>
                        <section>
                            <label>Event Type</label>
                            <Controller
                                name="eventTypeId"
                                control={control}
                                render={() => (
                                    <Select
                                        defaultValue={eventTypes[0]}
                                        isClearable
                                        options={eventTypes}
                                        getOptionLabel={(option) => option.eventTypeName}
                                        getOptionValue={(option) => '' + option.eventTypeId}
                                        onChange={(e) => {
                                            onEventTypeChange(e?.eventTypeId);
                                        }}
                                        className="input"
                                    />
                                )}
                            />
                        </section>
                    </div>

                    <div>
                        <section>
                            <label>Where</label>
                            <Controller
                                name="location"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <Input disableUnderline {...field} className="input" />}
                            />
                        </section>
                    </div>
                    <div className="event-date-cost">
                        <section>
                            When
                            <Controller
                                name="date"
                                control={control}
                                render={({ field }) => (
                                    <ReactDatePicker
                                        className="date-field"
                                        placeholderText="Time"
                                        showPreviousMonths
                                        onChange={(e) => field.onChange(e)}
                                        selected={field.value}
                                        minDate={new Date()}
                                        calendarClassName="event-date"
                                        dateFormat="MM-dd-yyyy"
                                    />
                                )}
                            />
                            Cost
                            <Controller
                                name="budget"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <Input disableUnderline {...field} className="event-cost" />}
                            />
                        </section>
                    </div>
                    <div>
                        <section>
                            <label>Who</label>
                            <Controller
                                name="owner"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <Input disableUnderline {...field} className="input" />}
                            />
                        </section>
                    </div>
                    {activityTypes && activityTypes.activities && (
                        <div>
                            <section>
                                <label>Activity Type</label>
                                <Controller
                                    name="activities"
                                    control={control}
                                    render={() => (
                                        <CreatableSelect
                                            defaultValue={activityTypes.activities[0]}
                                            isClearable
                                            isMulti
                                            options={activityTypes.activities}
                                            getOptionLabel={(option) => option.activityTypeName}
                                            getOptionValue={(option) => '' + option.activityTypeId}
                                            className="input"
                                            onChange={(e) => handleActivitiesCreate(e)}
                                        />
                                    )}
                                />
                            </section>
                        </div>
                    )}

                    <div>
                        <input type="submit" className="button" />
                    </div>
                </div>
            </form>
        </>
    );
};

export default CreateEventComponent;
