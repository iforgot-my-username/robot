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
}

const Controller: React.FC<Props> = ({
  onUpClick1,
  onDownClick1,
  onUpClick2,
  onDownClick2,
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
            <ArrowDropUpIcon />
          </Button>
          <Button className="down-button" onClick={onDownClick1}>
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          className="button-group"
          disableElevation
        >
          <Button className="up-button" onClick={onUpClick2}>
            <ArrowDropUpIcon />
          </Button>
          <Button className="down-button" onClick={onDownClick2}>
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
      </div>
      <div className="bottom-buttons">
        <Button
          className="weap"
          variant="contained"
          color="primary"
          style={{ marginRight: '10px' }}
        >
          Weapon
        </Button>
        <Button className="weap" variant="contained" color="secondary">
          Flame
        </Button>
      </div>
    </div>
  );
};

export default Controller;
