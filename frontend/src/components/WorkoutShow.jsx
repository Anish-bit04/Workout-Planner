import React from 'react'

const WorkoutShow = ({workout}) => {
  return (
    <div className='workout-details'>
        <span>Title:</span>
        {workout.title} <br />
        <span>Reps:</span>
        {workout.reps} <br />
        <span>Load:</span>
        {workout.load} <br /><br />

    </div>
  )
}

export default WorkoutShow