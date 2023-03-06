import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box, Flex, HStack, Stack, VStack } from '@chakra-ui/react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
