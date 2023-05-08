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
  // const [upButton1IntervalId, setUpButton1IntervalId] = useState<number | null>(
  //   null
  // );
  // const [downButton1IntervalId, setDownButton1IntervalId] = useState<
  //   number | null
  // >(null);
  // const [upButton2IntervalId, setUpButton2IntervalId] = useState<number | null>(
  //   null
  // );
  // const [downButton2IntervalId, setDownButton2IntervalId] = useState<
  //   number | null
  // >(null);

  const [upButton1Pressed, setUpButton1Pressed] = useState(false);
  const [downButton1Pressed, setDownButton1Pressed] = useState(false);
  const [upButton2Pressed, setUpButton2Pressed] = useState(false);
  const [downButton2Pressed, setDownButton2Pressed] = useState(false);
  const [logic, setLogic] = useState([0, 0, 0, 0]);

  // const handleMouseDown = (
  //   action: () => void,
  //   dispatchSetInteralId: React.Dispatch<React.SetStateAction<number | null>>
  // ) => {
  //   const intervalId = setInterval(action, 180);
  //   dispatchSetInteralId(intervalId);
  // };

  // const handleMouseUp = (intervalId: number | null) => {
  //   if (intervalId !== null) {
  //     clearInterval(intervalId);
  //   }
  // };
  const logicTransform = (logic: boolean) => (logic ? 1 : 0);

  useEffect(() => {
    setLogic(
      [
        upButton1Pressed,
        downButton1Pressed,
        upButton2Pressed,
        downButton2Pressed,
      ].map(logicTransform)
    );
  }, [
    upButton1Pressed,
    downButton1Pressed,
    upButton2Pressed,
    downButton2Pressed,
  ]);

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
            onMouseDown={() => {
              setUpButton1Pressed(true);
              // handleMouseDown(upButton1Action, setUpButton1IntervalId);
            }}
            onMouseUp={() => {
              setUpButton1Pressed(false);
              // handleMouseUp(upButton1IntervalId);
            }}
            onTouchStart={() => {
              setUpButton1Pressed(true);
            }}
            onTouchEnd={() => {
              setUpButton1Pressed(false);
            }}
          >
            <ArrowDropUpIcon fontSize="large" />
          </Button>
          <Button
            className="down-button"
            onClick={downButton1Action}
            onMouseDown={() => {
              setDownButton1Pressed(true);

              // handleMouseDown(downButton1Action, setDownButton1IntervalId);
            }}
            onMouseUp={() => {
              setDownButton1Pressed(false);

              // handleMouseUp(downButton1IntervalId);
            }}
            onTouchStart={() => {
              setDownButton1Pressed(true);
            }}
            onTouchEnd={() => {
              setDownButton1Pressed(false);
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
            onClick={upButton2Action}
            onMouseDown={() => {
              // handleMouseDown(upButton2Action, setUpButton2IntervalId);
              setUpButton2Pressed(true);
            }}
            onMouseUp={() => {
              setUpButton2Pressed(false);

              // handleMouseUp(upButton2IntervalId);
            }}
            onTouchStart={() => {
              setUpButton2Pressed(true);
            }}
            onTouchEnd={() => {
              setUpButton2Pressed(false);
            }}
          >
            <ArrowDropUpIcon fontSize="large" />
          </Button>
          <Button
            className="down-button"
            onClick={downButton2Action}
            onMouseDown={() => {
              setDownButton2Pressed(true);

              // handleMouseDown(downButton2Action, setDownButton2IntervalId);
            }}
            onMouseUp={() => {
              setDownButton2Pressed(false);

              // handleMouseUp(downButton2IntervalId);
            }}
            onTouchStart={() => {
              setDownButton2Pressed(true);
            }}
            onTouchEnd={() => {
              setDownButton2Pressed(false);
            }}
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
          height: '80px',
          width: '30%',
          mx: 'auto',
          flexDirection: 'column',
        }}
      >
        <div>{`${upButton1Pressed} ${upButton2Pressed}`}</div>
        <div>{`${downButton1Pressed} ${downButton2Pressed}`}</div>
        <div>{logic.join(' ')}</div>
      </Box>
    </div>
  );
};

export default Controller;
