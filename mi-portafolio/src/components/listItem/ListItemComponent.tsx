import { ListItem, Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';

const TypographyComponent = styled(Typography)(({ theme }) => ({
  position: 'relative',
  paddingBottom: '2px',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    transformOrigin: 'left',
    transform: 'scaleX(0)',
  },
  '&:hover:after': {
    opacity: 1,
    transform: 'scaleX(1)',
  },
  '&:hover': {
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'font-size 0.3s ease-in-out',
  },
}));

interface ListItemComponentProps extends TypographyProps {}
export const ListItemComponent: FC<ListItemComponentProps> = ({ ...props }) => {
  return (
    <ListItem sx={{ height: theme => theme.spacing(6) }}>
      <TypographyComponent {...props} />
    </ListItem>
  );
};
