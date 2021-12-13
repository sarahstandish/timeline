import { updateLocale } from "moment";
import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";

// needs className timeline
// this is a container component
// it's responsible for:
// - recieving the timeline data from app as props
// - rendering a list of timeline event components based on the timeline data (guess it should also be passed as props)
// - ok here we go: passing person, status, and timestamp data to each timelineevent component

const Timeline = (props) => {
  const timelineEventsArry = props.user.map((update, index) => {
    return (
      <TimelineEvent
        key={index}
        person={update.person}
        status={update.status}
        time={update.timestamp}
      />
    );
  });

  return <div className="timeline">{timelineEventsArry}</div>;
};

export default Timeline;
