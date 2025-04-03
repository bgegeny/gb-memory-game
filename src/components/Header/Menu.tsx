import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRotate, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Modal, Box, TextField, Typography, Button } from "@mui/material";
import { RootState } from "../../redux/store";
import { resetCards } from "../../redux/slices/deckSlice";
import { reset } from "../../redux/slices/gameSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();
  const numberOfPairs = useAppSelector(
    (state: RootState) => state.game.numberOfPairs
  );

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleRestart = () => {
    dispatch(resetCards(numberOfPairs));
    dispatch(reset());
    setIsSettingsOpen(false);
  };

  const handleOpen = () => {
    setIsSettingsOpen(true);
  };

  const handleClose = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className="menu">
      <FontAwesomeIcon
        onClick={handleOpen}
        className="icon-button"
        size="2x"
        icon={faGear}
      />
      <div className="icon-separator" />
      <FontAwesomeIcon
        onClick={handleRestart}
        className="icon-button"
        size="2x"
        icon={faRotate}
      />

      <Modal
        open={isSettingsOpen}
        onClose={handleClose}
        className="settings-modal"
        aria-labelledby="settings-modal-title"
        aria-describedby="settings-modal-description"
      >
        <Box className="settings-modal-box">
          <div className="modal-header">
            <h2 className="settings-modal-title">Game Settings</h2>
            <FontAwesomeIcon
              icon={faXmark}
              className="close-button"
              onClick={handleClose}
              size="2x"
            />
          </div>
          <div className="modal-container">
            <div className="input-container">
              <Typography mt="10px">Number of pair of cards:</Typography>
              <TextField
                variant="outlined"
                size="small"
                type="number"
                value={numberOfPairs}
                className="number-of-pairs-input"
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  if (!isNaN(value)) {
                    // Handle number of pairs change
                  }
                }}
              />
            </div>
            <div className="input-container">
              <Typography mt="10px">Countdown time (sec.):</Typography>
              <TextField
                variant="outlined"
                size="small"
                type="number"
                value={numberOfPairs}
                className="number-of-pairs-input"
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  if (!isNaN(value)) {
                    // Handle number of pairs change
                  }
                }}
              />
            </div>
            <div className="button-container">
              <Button
                variant="contained"
                color="error"
                onClick={handleRestart}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50px",
                  width: "70%",
                }}
              >
                Save Settings
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Menu;
