import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("https://workout-planner-backend-e9o3.onrender.com/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    });
    const json = await response.json();

    if (json.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      alert("Workout is successfully added");
    } else {
      console.error("Error while creating workout");
    }
  }
  return (
    <div className="workoutForm">
      <form onSubmit={handleSubmit}>
        <label>Exercise Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /> <br />
        <label>Reps: </label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <br />
        <br />
        <label>Load: (in kg)</label>
        <input
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />
        <br />
        <br />
        <div className="addBtn"><button>Add Workout</button></div>
        
      </form>
    </div>
  );
};

export default WorkoutForm;
