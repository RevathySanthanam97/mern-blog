import React from 'react'
import styled from '@emotion/styled'

const RowWrapper = styled.div`
  display: flex;
  ${(p) => p.gap && `
    gap: ${p.gap};
  `}
  ${(p) => p.mobColumn && `
    flex-direction: column;
    @media screen and (min-width: 1024px) {
      flex-direction: row;
    }
  `}
  ${(p) => p.align && `
    align-items: ${p.align};
  `}
  ${(p) => p.justify && `
    justify-content: ${p.justify};
  `}
`;

export const Row = ({ children, gap, mobColumn, align, justify, className }) => {
  return (
    <RowWrapper
      gap={gap}
      mobColumn={mobColumn}
      align={align}
      justify={justify}
      className={`row-layout ${className ? className : ''}`}
    >
      {children}
    </RowWrapper>
  )
}
