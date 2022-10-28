import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Modal,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Inventory from "./Inventory";
import InventoryModal from "./InventoryModal";

function Home() {
  const [character, setCharacter] = useState(null);
  const [location, setLocation] = useState("");
  const [inventory, setInventory] = useState([]);
  const [inventoryClicked, setInventoryClicked] = useState(false);
  const [placedItems, setPlacedItems] = useState();
  const [open, setOpen] = useState(false);
  const [foundItem, setFoundItem] = useState();
  const [equipped, setEquipped] = useState();

  const navigate = useNavigate();
  const showModal = (
    <InventoryModal
      open={open}
      setOpen={setOpen}
      foundItem={foundItem}
      character={character}
    />
  );

  useEffect(() => {
    fetch("/currentcharacter").then((res) => {
      if (res.ok) {
        res.json().then((character) => {
          setCharacter(character);
          setLocation(character.upcoming_situation.location);
          setInventory(character.items);
          console.log(character);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/items").then((res) => {
      if (res.ok) {
        res.json().then((items) => {
          setPlacedItems(items);
        });
      }
    });
  }, []);

  const handleLogOut = () => {
    if (character) {
      fetch("/logout", {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setCharacter(null);
          navigate("/");
        }
      });
    }
  };

  const handleChoiceClick = (id) => {
    fetch(`/character_choices/${character.character_choice_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ choice_id: id }),
    })
      .then((res) => res.json())
      .then((res) => {
        window.location.reload(false);
      });
  };

  const handleReset = () => {
    fetch(`/character_choices/${character.character_choice_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ choice_id: 1 }),
    }).then((res) => {
      window.location.reload(false);
    });
  };

  const handleInventoryClick = () => {
    setInventoryClicked(!inventoryClicked);
  };

  const renderStory = character ? (
    <Container key={character.upcoming_situation.id}>
      {character.upcoming_situation_text}
    </Container>
  ) : (
    <Container></Container>
  );

  const hasFourKeys = () => {
    const keyArr = character.items.filter((item) => item.name.includes("Key"));
    console.log("keys", keyArr);
    return keyArr.length === 4;
  };

  const checkButtonDisabled = (choice) => {
    const hasKeys = hasFourKeys();
    const choiceText = choice?.choice_text;
    console.log(choiceText);
    if (
      choiceText !== "Break the door down" &&
      choiceText !== "Open the lockbox" &&
      choiceText !== "Unlock the door and walk through"
    ) {
      return false;
    } else if (
      equipped &&
      choiceText === "Break the door down" &&
      equipped.name === "Axe"
    ) {
      return false;
    } else if (
      equipped &&
      choiceText === "Open the lockbox" &&
      equipped.name === "Knife"
    ) {
      return false;
    } else if (choiceText === "Unlock the door and walk through" && hasKeys) {
      return false;
    } else return true;
  };

  const choicesMap = () => {
    let choiceList = [];
    if (character) {
      choiceList = character.upcoming_choices.map((choice) => {
        return (
          <Button
            variant="contained"
            key={choice.id}
            onClick={() => handleChoiceClick(choice.id)}
            disabled={checkButtonDisabled(choice)}
          >
            {choice.choice_text}
          </Button>
        );
      });
    }
    return choiceList;
  };

  const handleBackClick = () => {
    fetch(`/character_choices/${character.character_choice_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ choice_id: character.recent_situation.id }),
    }).then((res) => {
      window.location.reload(false);
    });
  };

  const handleSearchClick = () => {
    if (placedItems) {
      const itemMap = placedItems.map((item) => {
        if (item.location === location) {
          setFoundItem(item);
          setOpen(true);
        } else {
          setOpen(true);
        }
      });
    }
  };

  const handleEquipItem = (id) => {
    character.items.map((item) => {
      if (id === item.id) {
        setEquipped(item);
      }
    });
  };

  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <div>
        <Container>
          <h1 className="title">
            Hickory Creek - {character ? character.username : ""}
          </h1>
        </Container>
      </div>
      <Container sx={{ paddingTop: 1 }}>
        <Button variant="contained" onClick={handleLogOut}>
          Logout
        </Button>
        <Button
          variant="contained"
          onClick={handleReset}
          sx={{ marginLeft: 1 }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          onClick={handleAbout}
          sx={{ marginLeft: 1 }}
        >
          About
        </Button>
      </Container>
      <br></br>
      <Container className="game-container" sx={{ width: "80%" }}>
        <Card
          sx={{
            display: "flex",
            margin: 0,
            padding: 0,
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CardContent>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                width: "100%",
                paddingTop: "50px",
              }}
            >
              <Container>
                <h2>{location}</h2>
              </Container>
              <Typography>{renderStory}</Typography>
            </Container>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                padding: "20px 0",
              }}
            >
              {choicesMap()}
              <Button variant="contained" onClick={handleBackClick}>
                Go Back
              </Button>
              <Button variant="contained" onClick={handleSearchClick}>
                Search for items
              </Button>
              {open ? showModal : null}
              <Button variant="contained" onClick={handleInventoryClick}>
                Inventory
              </Button>
            </Container>
          </CardContent>
        </Card>
        {inventoryClicked ? (
          <Inventory
            inventory={inventory}
            character={character}
            handleEquipItem={handleEquipItem}
            equipped={equipped}
          />
        ) : null}
      </Container>
    </>
  );
}
export default Home;
