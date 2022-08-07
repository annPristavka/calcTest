import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const H1 = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 0px 25px;
`

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 130px;
  width: 100%;
`

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &:link {
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }

  &active {
    color: ${({ theme }) => theme.colors.secondaryLight};
  }
`
