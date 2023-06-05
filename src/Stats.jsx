import data from "./data.json";

const Stats = (props) => {
  return (
    <div className="stats-section">
      <div>
        <p>Rotation time</p>
        <h2>{data[props.planet].rotation}</h2>
      </div>
      <div>
        <p>Revolution Time</p>
        <h2>{data[props.planet].revolution}</h2>
      </div>
      <div>
        <p>Radius</p>
        <h2>{data[props.planet].radius}</h2>
      </div>
      <div>
        <p>Average Temp.</p>
        <h2>{data[props.planet].temperature}</h2>
      </div>
    </div>
  );
};

export default Stats;
