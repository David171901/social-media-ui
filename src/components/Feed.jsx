import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {

  const createArray = (n) => {
    return Array.from({length: n}, (_, i) => i);
  }

  return (
    <Box flex={4} p={2}>
      {
        createArray(10).map( (el,index) => (
          <Post key={index}></Post>
        ))
      }
      
    </Box>
  )
}

export default Feed