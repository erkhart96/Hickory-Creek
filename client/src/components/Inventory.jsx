import React from 'react'
import { Card, Container, Button } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'

function Inventory({ character, handleEquipItem, equipped }) {


    const collectedItemMap = character.collected_items.map((item) =>{
        return (item)
    })

    const handleItemDiscard = (id) => {
        collectedItemMap.map((item) => {
            if (id === item.item_id) {
                fetch(`/collected_items/${item.id}`, {
                    method: "DELETE"
                })
                .then((res) => {
                    if (res.ok) {
                        window.location.reload(false)
                        console.log("Delete successful!")
                    }
                })
            }
        }) 
    }


    const inventoryMap = character.items.map((inv) => {
        return (
            <div>
                <p>{inv.name}</p>
                <p>Durability: {inv.durability}</p>
                <Button onClick={() => handleEquipItem(inv.id)}>Equip</Button>
                <Button onClick={() => handleItemDiscard(inv.id)}>Discard</Button>
            </div>
        )
    })


  return (
    <Container>
        <Card sx={{display: 'flex', padding: 0, marginTop: '10px', justifyContent: 'center', alignItems: 'center'}}>
            <Container>
                <h2>Inventory</h2>
                <h3>Equipped Item: {equipped ? equipped.name : "Nothing"}</h3>
                {inventoryMap}
            </Container>
        </Card>
    </Container>
  )
}

export default Inventory