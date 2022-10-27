import React from 'react'
import { Card, Container, Button } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'

function Inventory({ inventory }) {

    useEffect(() => {
        fetch('/collected_items')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    },[])

    // const handleItemDiscard = (id) => {
    //     fetch(`/collected_items/${id}`, {
    //         method: 'DELETE'
    //     })
    //     .then((res) => {
    //         if (res.ok) {
    //             console.log("Delete Successful!")
    //         }
    //     })
    // }



    const inventoryMap = inventory.map((inv) => {
        return (
            <div>
                <p>{inv.name}</p>
                <p>Durability: {inv.durability}</p>
                <Button>Discard</Button>
            </div>
        )
    })


  return (
    <Container>
        <Card sx={{display: 'flex', padding: 0, marginTop: '10px', justifyContent: 'center', alignItems: 'center', height: '30vh'}}>
            <Container>
                <h2>Inventory</h2>
                {inventoryMap}
            </Container>
        </Card>
    </Container>
  )
}

export default Inventory