import { Box, Grid, Typography } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface Props {
  title?: string;
  children: ReactNode | ReactNode[];
  subTitle?: string;
}
export const ContenidoComponent: FC<Props> = ({ title, children, subTitle }) => {
  return (
    <Grid container flexDirection={'row'}>
      <Grid item sm={1} />
      <Grid item xs pt={5}>
        <Typography variant={subTitle ? 'h3' : 'h1'} color={'primary'}>
          {subTitle ? subTitle : title}
        </Typography>
        <Grid container flexDirection={'row'} spacing={2} pt={1}>
          <Grid item xs={1} sm={0.5}>
            <Box
              component={'div'}
              sx={{
                position: 'relative',
                width: theme => theme.spacing(0.4),
                height: '100%',
                background: theme =>
                  `linear-gradient(to bottom right, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
              }}
            />
          </Grid>
          <Grid item xs={10} sm={6}>
            <Box display={'flex'} gap={1} flexDirection={'column'}>
              {children}
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            otro
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
