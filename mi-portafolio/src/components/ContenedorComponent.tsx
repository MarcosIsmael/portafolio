import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';
interface Props {
  children: ReactNode | ReactNode[];
}
export const ContenedorComponent: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        width: '94%',
        minWidth: '300px',
        height: '88%',
        backgroundColor: '#1d1d20',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
};
