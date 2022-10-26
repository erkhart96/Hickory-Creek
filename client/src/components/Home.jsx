import { Container, Card, CardContent, Typography, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const [character, setCharacter] = useState(null);

    const navigate = useNavigate();

   useEffect(() => {
    fetch('/currentcharacter').then((res) => {
        if (res.ok) {
            res.json().then((character) => {
                setCharacter(character)
            })
        }
    })
   }, [])

   const handleLogOut = () => {
    if (character) {
        fetch('/logout',{
            method: "DELETE"
        })
        .then((res) => {
            if (res.ok) {
                setCharacter(null)
                navigate('/')
            }
        })
    }
   }

  return (
    <>
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
    <Container>
        <Button variant='contained' onClick={handleLogOut}>Logout</Button>
    </Container>
    </>
  )
}

export default Home