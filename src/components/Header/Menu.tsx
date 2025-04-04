import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRotate, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Modal, Box, Typography, Button, Input } from "@mui/material";
import { useInitMenu } from "../../hooks/useInitMenu";

const Menu: React.FC = () => {
  const {
    durationInput,
    numberOfPairsInput,
    isSettingsOpen,
    setDurationInput,
    setNumberOfPairsInput,
    handleRestart,
    handleOpen,
    handleClose,
  } = useInitMenu();

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
          <div className="input-container">
            <Typography>Number of pair of cards:</Typography>
            <Input
              inputProps={{
                min: 1,
                max: 72,
              }}
              size="small"
              type="number"
              value={numberOfPairsInput}
              className="modal-input"
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                if (!isNaN(value)) {
                  setNumberOfPairsInput(value);
                }
              }}
            />
          </div>
          <div className="input-container">
            <Typography>Countdown time (sec.):</Typography>
            <Input
              inputProps={{
                min: 1,
                max: 120,
              }}
              size="small"
              type="number"
              value={durationInput}
              className="modal-input"
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                if (!isNaN(value)) {
                  setDurationInput(value);
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
        </Box>
      </Modal>
    </div>
  );
};

export default Menu;
