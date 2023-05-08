import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Controller.css';
import { Box } from '@mui/material';

interface Props {
  upButton1Action: () => void;

  downButton1Action: () => void;

  upButton2Action: () => void;

  downButton2Action: () => void;

  func1: () => void;
  func2: () => void;
}

const Controller: React.FC<Props> = ({
  upButton1Action,

  downButton1Action,

  upButton2Action,

  downButton2Action,

  func1,
  func2,
}) => {
  const [upButton1IntervalId, setUpButton1IntervalId] = useState<number | null>(
    null
  );
  const [downButton1IntervalId, setDownButton1IntervalId] = useState<
    number | null
  >(null);
  const [upButton2IntervalId, setUpButton2IntervalId] = useState<number | null>(
    null
  );
  const [downButton2IntervalId, setDownButton2IntervalId] = useState<
    number | null
  >(null);

  const [display1, setDisplay1] = useState('1');
  const [display2, setDisplay2] = useState('1');

  const display = (txt: string) => {
    setDisplay1(display2);
    setDisplay2(`${new Date().getSeconds()}s:  ${txt}`);
  };

  const handleMouseDown = (
    action: () => void,
    dispatchSetInteralId: React.Dispatch<React.SetStateAction<number | null>>
  ) => {
    const intervalId = setInterval(action, 180);
    dispatchSetInteralId(intervalId);
  };

  const handleMouseUp = (intervalId: number | null) => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  };

  return (
    <div style={{ marginTop: '70px' }}>
      <div className="controller-container">
        <ButtonGroup
          variant="contained"
          className="button-group"
          disableElevation
        >
          <Button
            className="up-button"
            onClick={upButton1Action}
            onMouseDown={() => {
              handleMouseDown(upButton1Action, setUpButton1IntervalId);
              display('Up right');
            }}
            onMouseUp={() => handleMouseUp(upButton1IntervalId)}
          >
            <ArrowDropUpIcon fontSize="large" />
          </Button>
          <Button
            className="down-button"
            onClick={downButton1Action}
            onMouseDown={() =>
              handleMouseDown(downButton1Action, setDownButton1IntervalId)
            }
            onMouseUp={() => handleMouseUp(downButton1IntervalId)}
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
            onClick={upButton2Action}
            onMouseDown={() => {
              handleMouseDown(upButton2Action, setUpButton2IntervalId);
              display('Up left');
            }}
            onMouseUp={() => handleMouseUp(upButton2IntervalId)}
          >
            <ArrowDropUpIcon fontSize="large" />
          </Button>
          <Button
            className="down-button"
            onClick={downButton2Action}
            onMouseDown={() =>
              handleMouseDown(downButton2Action, setDownButton2IntervalId)
            }
            onMouseUp={() => handleMouseUp(downButton2IntervalId)}
          >
            <ArrowDropDownIcon fontSize="large" />
          </Button>
        </ButtonGroup>
      </div>
      <div className="bottom-buttons">
        <Button
          className="weap"
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
          onClick={func1}
        >
          Weapon
        </Button>
        <Button
          className="weap"
          variant="contained"
          color="secondary"
          onClick={func2}
        >
          Flame
        </Button>
      </div>
      <Box
        sx={{
          marginTop: '15px',
          backgroundColor: '#f5f5f5',
          padding: '2px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50px',
          width: '30%',
          mx: 'auto',
          flexDirection: 'column',
        }}
      >
        <div>{display1}</div>
        <div>{display2}</div>
      </Box>
    </div>
  );
};

export default Controller;
