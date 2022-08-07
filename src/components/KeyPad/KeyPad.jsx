import React from 'react'
import { Button, KeyPadContainer } from './components'

const KeyPad = () => {
  const buttonsArray = [
    { id: 1, value: 'C', name: 'C' },
    { id: 2, value: 7, name: '7' },
    { id: 3, value: 8, name: '8' },
    { id: 4, value: 9, name: '9' },
    { id: 5, value: '*', name: '*' },
    { id: 6, value: '-', name: '-' },
    { id: 7, value: 4, name: '4' },
    { id: 8, value: 5, name: '5' },
    { id: 9, value: 6, name: '6' },
    { id: 10, value: '/' },
    { id: 11, value: '+', name: '+' },
    { id: 12, value: 1, name: '1' },
    { id: 13, value: 2, name: '2' },
    { id: 14, value: 3, name: '3' },
    { id: 15, value: '=', name: '=' },
    { id: 16, value: '.', name: '.' },
    { id: 17, value: '(', name: '(' },
    { id: 18, value: 0, name: '0' },
    { id: 19, value: ')', name: ')' },
    { id: 20, value: 'CE', name: 'CE' },
  ]

  return (
    <KeyPadContainer>
      {buttonsArray.map((item, index) => (
        <Button key={item.id}>{item.value}</Button>
      ))}
    </KeyPadContainer>
  )
}

export default KeyPad
