import { Container, Card, CardContent, Typography, Button } from '@mui/material'
import React, { useEffect } from 'react'

function Home() {

   useEffect (() => {
    fetch('/characters')
    .then((res) => res.json())
    .then((data) => console.log(data[0].name))
   }, [])

  return (
    <Container className='game-container' sx={{width: 1200}}>
       <Card sx={{display: 'flex', padding: 0, margin: 0, justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
        <CardContent>
            <Container sx={{display: 'flex', justifyContent: 'center', width: 1200, paddingTop: '50px'}}>
            <Typography>
                Akjsdgnvowiewoivnwe. IEvowinevoiwenfowevwefv. opweinfowenvowevnwegwev, wewopeivnwoev.
            </Typography>
            </Container>
            <Container sx={{display: 'grid', gridAutoFlow: 'column', gridColumnGap: '100px', paddingTop: '250px'}}>
                <Button variant='contained'>Test</Button>
                <Button variant='contained'>Test</Button>
                <Button variant='contained'>Test</Button>
                <Button variant='contained'>Test</Button>
            </Container>
        </CardContent>
        </Card> 
    </Container>
  )
}

export default Home