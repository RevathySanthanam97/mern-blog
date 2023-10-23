import React from 'react'
import { WorkoutCard } from './workoutCard'
import styled from '@emotion/styled'

const WorkoutGridWrapper = styled.div`
  .grid__container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 80px;
  }
`;

export const WorkoutGrid = ({ workouts }) => {
  return (
    <WorkoutGridWrapper className='grid__wrapper'>
      <h2>WorkoutGrid</h2>
      <div className='grid__container'>
        {workouts?.map((item) => (
          <WorkoutCard key={item._id} workout={item} />
        ))}
      </div>
    </WorkoutGridWrapper>
  )
}
