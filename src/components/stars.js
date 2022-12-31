import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'None',
  1: 'Poor',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Minimal',
  3: 'Minimal+',
  3.5: 'Minimal+',
  4: 'Satisfactory',
  4.5: 'Satisfactory',
  5: 'Satisfactory+',
  5.5: 'Satisfactory+',
  6: 'Acceptable',
  6.5: 'Acceptable+',
  7.0: 'Good',
  7.5: 'Good+',
  8.0: 'Great',
  8.5: 'Great+',
  9.0: 'Wonderful',
  9.5: 'Wonderful+',
  10: 'Fantastic.'
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating(){
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 250,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
      className = 'mt-5 ml-20'
        max = {10}
        size = "large"
        name="hover-feedback"
        value={value}
        precision={0.5}
        defaultValue={0}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box className = 'mt-5 ml-20'sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}