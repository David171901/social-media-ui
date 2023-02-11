import React from 'react'
import { Box, Typography } from '@mui/material'
import Post from '../components/Post'

const Homepage = () => {

    const createArray = (n) => {
        return Array.from({length: n}, (_, i) => i);
    }

  return (
    <Box flex={4} p={2}>
      <Typography   Typography variant="h3" >
        Home
      </Typography>
      {
        createArray(10).map( (el,index) => (
          <Post key={index}></Post>
        ))
      }
      
    </Box>
  )
}

export default Homepage