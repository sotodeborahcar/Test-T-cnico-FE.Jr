'use client'

import { Box, Heading, Text } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'

export default function Result() {
  return (
    <Box display="flex" alignItems="center" textAlign="center" py={4} px={4} pl={5} backgroundColor="#FEEBCB" borderLeft="4px" borderColor="#DD6B20">
      <WarningIcon boxSize={'24px'} color={'#DD6B20'} />
      <Box ml={4} display="flex" flexDir="column" alignItems="flex-start" lineHeight={6} 
>
        <Heading as="h3" size="16px" >
            Happy Hour
        </Heading>
        <Text fontSize="16px"  color="#2D3748">
            16:00 - 17:00 hs MEX
        </Text>
      </Box>
    </Box>
  )
}