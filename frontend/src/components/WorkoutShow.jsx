import React from "react";
import formatDistancetoNow from 'date-fns/formatDistanceToNow'

const WorkoutShow = ({ workout }) => {
  function handleDelete(){

  }
  return (
    <div className="workout-details">
      <div className="detailswrapper">
      <div>{workout.title} </div>
      <br />
      <span className="heading">Reps:</span>
      <span> {workout.reps} </span>
      <br />
      <span className="heading">Load (kg): </span>
      <span>{workout.load}</span>
      <br />
      <br />
      <span>{formatDistancetoNow(new Date(workout.createdAt),{addSuffix: true})}</span>
      </div>
      <button className="Deletebtn" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default WorkoutShow;
