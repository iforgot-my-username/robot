import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Controller.css';

interface Props {
  onUpClick1: () => void;
  onDownClick1: () => void;
  onUpClick2: () => void;
  onDownClick2: () => void;
  func1: () => void;
  func2: () => void;
}

const Controller: React.FC<Props> = ({
  onUpClick1,
  onDownClick1,
  onUpClick2,
  onDownClick2,
  func1,
  func2,
}) => {
  return (
    <div style={{ marginTop: '70px' }}>
      <div className="controller-container">
        <ButtonGroup
          variant="contained"
          className="button-group"
          disableElevation
        >
          <Button className="up-button" onClick={onUpClick1}>
            <ArrowDropUpIcon fontSize="large" />
          </Button>
          <Button className="down-button" onClick={onDownClick1}>
            <ArrowDropDownIcon fontSize="large" />
          </Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          className="button-group"
          disableElevation
        >
          <Button className="up-button" onClick={onUpClick2}>
            <ArrowDropUpIcon fontSize="large" />
          </Button>
          <Button className="down-button" onClick={onDownClick2}>
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
    </div>
  );
};

export default Controller;
