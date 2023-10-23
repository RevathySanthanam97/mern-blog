import React, { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import { useAuthContext } from '../hooks/useAuthContext';

export const WorkoutForm = () => {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutContext();
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You Must be Logged In');
      return;
    }

    const workout = { title, load, reps}
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
      console.log(json.error);
    }
    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
      setSuccess('Workout Added Successfully');
      dispatch({ type: 'CREATE_WORKOUT', payload: json})
    }
  }
  return (
    <div className='form_wrapper' onSubmit={(e) => handleSubmit(e)}>
      <form>
        <div><input placeholder="title" type='text' onChange={(e) => setTitle(e.target.value)} value={title} /></div>
        <div><input placeholder="load" type='text' onChange={(e) => setLoad(e.target.value)} value={load} /></div>
        <div><input placeholder="reps" type='number' onChange={(e) => setReps(e.target.value)} value={reps} /></div>
        <button>Submit</button>
        <div className='status'>
          {error && <i>{error}</i>}
          {success && <i>{success}</i>}
        </div>
      </form>
    </div>
  )
}
