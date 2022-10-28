import { Container, Card, CardContent, Typography, Button, Box, Modal } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import Inventory from './Inventory'
import InventoryModal from './InventoryModal'

function Home() {

    const [character, setCharacter] = useState(null);
    const [location, setLocation] = useState('')
    const [inventory, setInventory] = useState([])
    const [inventoryClicked, setInventoryClicked] = useState(false)
    const [placedItems, setPlacedItems] = useState()
    const [open, setOpen] = useState(false);
    const [foundItem, setFoundItem] = useState()
    const [equipped, setEquipped] = useState()

    const navigate = useNavigate();
    const showModal = (
        <InventoryModal open={open} setOpen={setOpen} foundItem={foundItem} character={character} />
    )

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

   useEffect(() => {
    fetch('/items').then((res) => {
        if (res.ok) {
            res.json().then((items) => {
                setPlacedItems(items)
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
            if (equipped && choice.choice_text === ("Break the door down") && equipped.name === ("Axe") || choice.choice_text !== ("Break the door down")) {
                return (
                    <Button variant="contained" key={choice.id} onClick={() => handleChoiceClick(choice.id)}>{choice.choice_text}</Button>
                )
            } else {
                return (
                    <Button variant="disabled" key={choice.id} onClick={() => handleChoiceClick(choice.id)}>{choice.choice_text}</Button>
                )
            }
        })
        return choiceList
    }
   }

   const handleBackClick = () => {
    fetch(`/character_choices/${character.character_choice_id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({choice_id: character.recent_situation.id}),
    })
    .then((res) => {
        window.location.reload(false)
    })
   }
   
   const handleSearchClick = () => {
        if (placedItems) {
            const itemMap = placedItems.map((item) => {
                if (item.location === location) {
                    console.log(item)
                    setFoundItem(item)
                    setOpen(true)
                } else {
                    setOpen(true)
                }
            })
        }
   }

   const handleEquipItem = (id) => {
    character.items.map((item) =>{
        if (id === item.id) {
            setEquipped(item)
        }
    })
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
                <Button variant='contained'onClick={handleBackClick}>Go Back</Button>
                <Button variant='contained' onClick={handleSearchClick}>Search for items</Button>
                {open ? showModal : null}
                <Button variant='contained' onClick={handleInventoryClick}>Inventory</Button>
            </Container>
        </CardContent>
        </Card>
        {inventoryClicked ? <Inventory inventory={inventory} character={character} handleEquipItem={handleEquipItem} equipped={equipped}/> : null} 
    </Container>
    </>
  )
}

export default Home