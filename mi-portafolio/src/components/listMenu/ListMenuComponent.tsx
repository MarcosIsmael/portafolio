import { List } from '@mui/material';
import { FC } from 'react';
import { ListItemComponent } from '../listItem';

export const ListMenuComponent: FC = () => {
  return (
    <List sx={{ pl: 2 }}>
      <ListItemComponent color='primary'>Sobre Mi</ListItemComponent>
      <ListItemComponent color='primary'>Estudios</ListItemComponent>
      <ListItemComponent color='primary'>Experiencias</ListItemComponent>
    </List>
  );
};
