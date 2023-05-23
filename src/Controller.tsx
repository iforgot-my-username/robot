import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Controller.css';
import { Box, Switch, Typography } from '@mui/material';

interface Props {
  controlAction: (logic: number[]) => void;
}

const Controller: React.FC<Props> = ({ controlAction }) => {
  const [buttonsIntervalId, setButtonsIntervalId] = useState<NodeJS.Timer | null>(null);

  const [upButton1Pressed, setUpButton1Pressed] = useState(false);
  const [downButton1Pressed, setDownButton1Pressed] = useState(false);
  const [upButton2Pressed, setUpButton2Pressed] = useState(false);
  const [downButton2Pressed, setDownButton2Pressed] = useState(false);
  const [logic, setLogic] = useState([0, 0, 0, 0]);
  const [weapon, setWeapon] = useState(false);
  const [flame, setFlame] = useState(false);

  if (logic.every((e) => e === 0) && buttonsIntervalId !== null) {
    clearInterval(buttonsIntervalId);
    setButtonsIntervalId(null);
  }

  const logicTransform = (logic: boolean) => (logic ? 1 : 0);

  useEffect(() => {
    const controlsLogic = [
      upButton1Pressed,
      downButton1Pressed,
      upButton2Pressed,
      downButton2Pressed,
    ];

    const transformedLogic = controlsLogic.map(logicTransform);
    setLogic(transformedLogic);

    controlAction([
      ...transformedLogic,
      logicTransform(weapon),
      logicTransform(flame),
    ]);

    const handleMouseUp = () => {
      setUpButton1Pressed(false);
      setDownButton1Pressed(false);
      setUpButton2Pressed(false);
      setDownButton2Pressed(false);
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [upButton1Pressed, downButton1Pressed, upButton2Pressed, downButton2Pressed, weapon, flame]);

  return (
    <div style={{ marginTop: '50px' }}>
      <FiberManualRecordIcon
        sx={{
          fontSize: 15,
          color: buttonsIntervalId !== null ? 'red' : '',
          borderRadius: '50%',
          backgroundColor: 'black',
          boxShadow: '2px 2px 2px grey',
        }}
      />

      <div className="controller-container">
        <ButtonGroup
          variant="contained"
          className="button-group"
          disableElevation
        >
          <Button
            className="up-button"
            onMouseDown={() => {
              setUpButton1Pressed(true);
            }}
            onTouchStart={() => {
              setUpButton1Pressed(true);
            }}
          >
            <ArrowDropUpIcon fontSize="large" />
          </Button>
          <Button
            className="down-button"
            onMouseDown={() => {
              setDownButton1Pressed(true);
            }}
            onTouchStart={() => {
              setDownButton1Pressed(true);
            }}
          >
            <ArrowDropDownIcon fontSize="large" />
          </Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          className="button-group"
          disableElevation
        >
          <Button
            className="up-button"
            onMouseDown={() => {
              setUpButton2Pressed(true);
            }}
            onTouchStart={() => {
              setUpButton2Pressed(true);
            }}
          >
            <ArrowDropUpIcon fontSize="large" />
          </Button>
          <Button
            className="down-button"
            onMouseDown={() => {
              setDownButton2Pressed(true);
            }}
            onTouchStart={() => {
              setDownButton2Pressed(true);
            }}
          >
            <ArrowDropDownIcon fontSize="large" />
          </Button>
        </ButtonGroup>
      </div>
      <div className="bottom-buttons">
        <Box
          sx={{
            borderRadius: '10px',
            backgroundColor: 'gray',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '20px',
            }}
          >
            <Typography
              sx={{ fontFamily: '"Courier New", monospace', color: 'white' }}
            >
              WEAPON
            </Typography>
            <Switch
              checked={weapon}
              onChange={() => setWeapon(!weapon)}
              inputProps={{ 'aria-label': 'toggle' }}
              color="error"
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '20px',
            }}
          >
            <Typography
              sx={{ fontFamily: '"Courier New", monospace', color: 'white' }}
            >
              FLAME
            </Typography>
            <Switch
              checked={flame}
              onChange={() => setFlame(!flame)}
              inputProps={{ 'aria-label': 'toggle' }}
              color="error"
            />
          </Box>
        </Box>
      </div>
      <Box
        sx={{
          borderRadius: '5px',
          marginTop: '15px',
          backgroundColor: '#f5f5f5',
          padding: '2px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',
          width: '30%',
          mx: 'auto',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Box
            sx={{
              background: upButton1Pressed ? 'green' : '',
              color: upButton1Pressed ? 'white' : '',
              borderRadius: '50%',
              padding: '4px',
            }}
          >
            <ArrowDropUpIcon />
          </Box>
          <Box
            sx={{
              background: upButton2Pressed ? 'green' : '',
              color: upButton2Pressed ? 'white' : '',
              borderRadius: '50%',
              padding: '4px',
              marginLeft: '5px',
            }}
          >
            <ArrowDropUpIcon />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '5px' }}>
          <Box
            sx={{
              background: downButton1Pressed ? 'green' : '',
              color: downButton1Pressed ? 'white' : '',
              borderRadius: '50%',
              padding: '4px',
            }}
          >
            <ArrowDropDownIcon />
          </Box>
          <Box
            sx={{
              background: downButton2Pressed ? 'green' : '',
              color: downButton2Pressed ? 'white' : '',
              borderRadius: '50%',
              padding: '4px',
              marginLeft: '5px',
            }}
          >
            <ArrowDropDownIcon />
          </Box>
        </Box>
         <div>{logic.join(' ')}</div>
      </Box>
    </div>
  );
};

export default Controller;
