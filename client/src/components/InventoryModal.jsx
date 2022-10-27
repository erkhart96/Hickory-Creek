import React from 'react'
import {Modal, Box, Typography, Button} from '@mui/material'

function InventoryModal({ foundItem, open, setOpen, character }) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const handleTake = () => {
        fetch('/collected_items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "character_id" : character.id,
                "item_id": foundItem.id
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        setOpen(false)
        window.location.reload(false)
    }

  return (
    <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You Found:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {foundItem.name}
            <Button onClick={handleTake}>Take</Button>
          </Typography>
        </Box>
      </Modal>
  )
}

export default InventoryModal