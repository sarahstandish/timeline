import moment from "moment";

// already fully implemented

const Timestamp = (props) => {
  const time = moment(props.time);
  const absolute = time.format("MMMM Do YYYY, h:mm:ss a");
  const relative = time.fromNow();

  return <span title={absolute}>{relative}</span>;
};

export default Timestamp;
