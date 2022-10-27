import { Container, Card, CardContent, Typography, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import Inventory from './Inventory'

function Home() {

    const [character, setCharacter] = useState(null);
    const [location, setLocation] = useState('')
    const [inventory, setInventory] = useState([])
    const [inventoryClicked, setInventoryClicked] = useState(false)

    const navigate = useNavigate();

   useEffect(() => {
    fetch('/currentcharacter').then((res) => {
        if (res.ok) {
            res.json().then((character) => {
                setCharacter(character)
                setLocation(character.upcoming_situation.location)
                setInventory(character.items)
                console.log(character)
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

   const handleChoiceClick = (id) => {
    console.log(character.character_choice_id)
    fetch(`/character_choices/${character.character_choice_id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({choice_id: id}),
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        window.location.reload(false)
    })
   }

   const handleReset = () => {
    fetch(`/character_choices/${character.character_choice_id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({choice_id: 1}),
    })
    .then((res) => {
        window.location.reload(false)
    })
   }

   const handleInventoryClick = () => {
    setInventoryClicked(!inventoryClicked)
   }

   const renderStory = character ? <Container key={character.upcoming_situation.id}>
    {character.upcoming_situation_text}
   </Container> : <Container></Container>

   const choicesMap = () => {
    if (character) {
        const choiceList = character.upcoming_choices.map((choice) => {
            return (
                <Button variant="contained" key={choice.id} onClick={() => handleChoiceClick(choice.id)}>{choice.choice_text}</Button>
            )
        })
        return choiceList
    }
   }

  return (
    <>
    <div>
        <Container><h1 className='title'>Hickory Creek - {character ? character.username : ''}</h1></Container>
    </div>
    <Container>
        <Button variant='contained' onClick={handleLogOut}>Logout</Button>
        <Button variant='contained' onClick={handleReset}>Reset</Button>
    </Container>
    <Container className='game-container' sx={{width: 1200}}>
       <Card sx={{display: 'flex', padding: 0, margin: 0, justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
        <CardContent>
            <Container sx={{display: 'flex', justifyContent: 'center', width: 1200, paddingTop: '50px'}}>
                <div>
                    <h2>{location}</h2>
                </div>
            <Typography>
                {renderStory}
            </Typography>
            </Container>
            <Container sx={{display: 'grid', gridAutoFlow: 'column', gridColumnGap: '100px', paddingTop: '250px'}}>
                {choicesMap()}
                <Button variant='contained'>Search for items</Button>
                <Button variant='contained' onClick={handleInventoryClick}>Inventory</Button>
            </Container>
        </CardContent>
        </Card>
        {inventoryClicked ? <Inventory inventory={inventory} /> : null} 
    </Container>
    </>
  )
}

export default Home