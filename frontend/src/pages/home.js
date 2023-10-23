import React, { useEffect } from 'react'
import { WorkoutGrid } from '../components/workoutGrid';
import { WorkoutForm } from '../components/workoutForm';
import styled from '@emotion/styled'
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import { useAuthContext } from '../hooks/useAuthContext';

const HomeWrapper = styled.div`
`;

const Home = () => {
  const {workouts, dispatch} = useWorkoutContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json});
      }
    }
    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])
  return (
    <HomeWrapper>
      <h1>Workout</h1>
      <WorkoutGrid workouts={workouts} />
      <WorkoutForm />
    </HomeWrapper>
  )
}

export default Home