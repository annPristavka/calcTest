import styled from 'styled-components'

export const Card = styled.div `
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: ${({ theme }) => theme.boxShadows[0]};
`

export const Heading = styled.h3 ``