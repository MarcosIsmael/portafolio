import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/system';

interface Props extends BoxProps {
  size: 'small' | 'large';
}
export const MarcoSuperiorComponent = styled(Box)<Props>(({ size }) => ({
  width: 0,
  height: 0,
  position: 'absolute',
  top: 0,
  left: 0,
  transition: 'background 0.3s ease',
  '&:hover': {
    '&::before': {
      background: 'linear-gradient(to bottom right, #ffd700, #87d2eb) !important',
    },
  },
  '&::before': {
    content: "''",
    width: size === 'small' ? '150px' : '300px',
    height: size === 'small' ? '150px' : '300px',
    position: 'absolute',
    top: '20px',
    left: '20px',
    background: 'linear-gradient(to top left, yellow, lightblue)',
    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
    transition: 'background 0.3s ease',
  },
}));
