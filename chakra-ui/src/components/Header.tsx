import { Box, Flex, Grid, GridItem, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

function Header() {
  return (
    <SimpleGrid columns={[2, null, 3]} spacing='40px'>
  <Box bg='tomato' height='80px'>1</Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>
    
  )
}

export default Header