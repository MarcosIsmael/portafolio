import { Box } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
export const ChangeColorComponent = () => {
  return (
    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
      <RadioButtonCheckedIcon />
      <RadioButtonCheckedIcon />
    </Box>
  );
};
