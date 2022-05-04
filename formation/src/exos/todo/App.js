import React from 'react'
import Addcase from './Addcase'
import { Box, Input, Add, Dobox } from './styled'

export default function App() {
  return (
    <>
      <Box>
        <Input></Input>
        <Add onClick={Addcase}>
          <i class="fa-solid fa-circle-plus fa-2xl"></i>
        </Add>
      </Box>
      <Dobox></Dobox>
    </>
  )
}
