import React from "react";

const WorkoutShow = ({ workout }) => {
  return (
    <div className="workout-details">
      <div>{workout.title} </div>
      <br />
      <span className="heading">Reps:</span>
      <span> {workout.reps} </span>
      <br />
      <span className="heading">Load (kg): </span>
      <span>{workout.load}</span>
      <br />
      <br />
      <span>{workout.createdAt}</span>
    </div>
  );
};

export default WorkoutShow;
