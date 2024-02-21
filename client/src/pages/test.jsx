import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLead = Boolean(anchorEl);
  const handleClickLead = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseLed = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={openLead ? 'long-menu' : undefined}
        aria-expanded={openLead ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClickLead}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={openLead}
        onClose={handleCloseLed}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleCloseLed}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}