import React from 'react'
import styled from '@emotion/styled'
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import { useAuthContext } from '../hooks/useAuthContext';

const WorkoutCardWrapper = styled.div`
  box-shadow: 0px 0px 7px 0px #0000002b;
  padding: 20px;
`;

export const WorkoutCard = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  const handleDelete = async (id) => {
    if (!user) {
      return;
    }
    
    const response = await fetch(`/api/workouts/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
  
    const json = await response.json()
    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json})
    }
  }
  const handleEdit = (e) => {
    console.log('edit')
  }
  return (
    <WorkoutCardWrapper className='card__container'>
      <div>
        <h4>{workout.title}</h4>
        <p>Load: {workout.load} Kgs</p>
        <p>Reps: {workout.reps}</p>
        <button onClick={() => handleDelete(workout._id)}>Delete</button>
        <button onClick={(e) => handleEdit(e)}>Edit</button>
      </div>
    </WorkoutCardWrapper>
  )
}
