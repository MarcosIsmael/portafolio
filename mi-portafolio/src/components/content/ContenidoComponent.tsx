import { Box, Grid, Typography } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { ContenedorComponent, MarcoSuperiorComponent } from '../index';

interface Props {
  title?: string;
  children: ReactNode | ReactNode[];
  subTitle?: string;
}
export const ContenidoComponent: FC<Props> = ({ title, children, subTitle }) => {
  return (
    <Grid container flexDirection={'row'}>
      <Grid item sm={1} />
      <Grid item xs>
        <Typography
          variant={subTitle ? 'h3' : 'h1'}
          color={'primary'}
          sx={{
            marginTop: theme =>
              theme.breakpoints.down('sm') ? theme.spacing(2) : theme.spacing(5),
            marginBottom: theme =>
              theme.breakpoints.down('sm') ? theme.spacing(2) : theme.spacing(5),
            width: theme => (theme.breakpoints.down('sm') ? '55%' : '100%'),
          }}
        >
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
          <Grid
            item
            sm={5}
            sx={{
              marginTop: theme =>
                theme.breakpoints.down('sm') ? theme.spacing(-10) : theme.spacing(8),
            }}
          >
            <Box position={'relative'}>
              <MarcoSuperiorComponent size='small' />
            </Box>
            otro
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
