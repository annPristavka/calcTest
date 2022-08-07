import styled from 'styled-components'

export const Button = styled.button`
  width: 80px;
  height: 80px;
  font-size: 24px;
  border-radius: 20px;
  border: none;
`

export const KeyPadContainer = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(80px, 1fr)
  );
  padding: 10px 20px;
`
