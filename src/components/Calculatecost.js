import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../css/calculatecost.css';

export default function Calculatecost() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [homebuy, setHomebuy] = useState(1234); // Initial homebuy value
  const [yoursaving, setYoursaving] = useState(1234); // Initial yoursaving value
  const [arrangeyourself, setArrangeyourself] = useState(1234); // Initial arrangeyourself value
  const [value, setValue] = useState([0, 100]); // Initial range

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setHomebuy(newValue[1]); // Update homebuy value based on slider's second value
  };

  function valuetext(value) {
    return `${value}`;
  }

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Button className='button-green' style={{marginLeft:'30px'}} onClick={handleClickOpen('paper')} variant='contained'>Calculate Cost</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle color='primary' id="scroll-dialog-title">Buying a House Host Calculator</DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className="info-text">
              <b>HomeBuyers Plan: {homebuy}</b>
            </div>
            <div className="info-text">
              <b>Your Savings: {yoursaving}</b>
            </div>
            <div className="info-text">
              <b>Arrange Yourself: {arrangeyourself}</b>
            </div>

            Adjust the house price below to calculate the typical costs to buy a house:
            <Box sx={{ width: 300 }} className="slider-box">
              <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={100}
              />
              <Typography id="range-slider" gutterBottom>
                Value range: {value[0]} - {value[1]}
              </Typography>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className='calclulate-text' variant='contained' fullWidth onClick={handleClose}>Send Us a Message</Button>
          <Button className='calclulate-text' variant='contained' fullWidth onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
