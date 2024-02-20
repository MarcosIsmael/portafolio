import { Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledTriangulo = styled(Box)(({ theme }) => ({
  width: 0,
  height: 0,
  position: 'absolute',
  bottom: 0,
  right: 0,
  transition: 'background 0.3s ease',
  '&:hover': {
    '&::before': {
      background: 'linear-gradient(to bottom right, #ffd700, #87d2eb) !important',
    },
  },
  '&::before': {
    content: "''",
    width: '300px',
    height: '300px',
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    background: 'linear-gradient(to bottom right, yellow, lightblue)',
    clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
    transition: 'background 0.3s ease',
  },
}));

const TrianguloInferiorComponent = () => {
  return <StyledTriangulo />;
};

export default TrianguloInferiorComponent;
