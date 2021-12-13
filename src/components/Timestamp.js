import moment from "moment";

// already fully implemented
// expects one prop: time

const Timestamp = (props) => {
  const time = moment(props.time);
  const absolute = time.format("MMMM Do YYYY, h:mm:ss a");
  const relative = time.fromNow();

  return (
    <span className="event-time" title={absolute}>
      {relative}
    </span>
  );
};

export default Timestamp;
