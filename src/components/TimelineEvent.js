import Timeline from "./Timeline";
import "./TimelineEvent.css";
import Timestamp from "./Timestamp";

// This is a presentational component
// It's responsible for:
// - Rendering the event's status message
// - Rendering the event's author (person)
// - Rendering the event's timestamp\
// - should use an instance of Timestamp

const TimelineEvent = (props) => {
  return (
    <div className="timeline-event">
      <h2 className="event-person">{props.person}</h2>
      <Timestamp time={props.time} />
      <p className="event-status">{props.status}</p>
    </div>
  );
};

export default TimelineEvent;
