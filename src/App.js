import "./App.css";
import timelineData from "./data/timeline.json";
import Timeline from "./components/Timeline";

// this is a container componenent
// it is responsible for:
// - holding the data bout the timeline, which contains all timeline events
//   guess that's why we imported timeline
// - rendering one instance of the timeline component, so we should probably do that
// - passing the timeline data to the timeline component

function App() {
  const events = timelineData.events;

  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">{timelineData.person}'s Feed on React</h1>
      </header>
      <div className=".App-main">
        <Timeline user={events} />
      </div>
    </div>
  );
}

export default App;
