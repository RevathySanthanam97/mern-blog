import { WorkoutsContext } from '../context/workoutContext';
import { useContext } from 'react';

export const useWorkoutContext = () => {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw Error('Use Workout Context for context');
  }
  return context
}