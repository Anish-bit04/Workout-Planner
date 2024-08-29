import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkoutShow from "../components/WorkoutShow";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://workout-planner-backend-e9o3.onrender.com/api/workouts");
      const data = response.data;
      if (response.status === 200) {
        setWorkout(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="workouts">
        {workout &&
          workout.map((workout) => (
            <WorkoutShow key={workout._id} workout={workout} />
          ))}
      </div>
      <div className="workout-form">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
