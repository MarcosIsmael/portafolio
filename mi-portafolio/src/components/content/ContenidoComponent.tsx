import { Box, Grid, Hidden, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { MarcoSuperiorComponent } from '../index';

import { ListMenuComponent } from '../listMenu';
import ColorPickerComponent from '../ColorPickerComponent';

interface Props {
  title?: string;
  children: ReactNode | ReactNode[];
  subTitle?: string;
}

export const ContenidoComponent: FC<Props> = ({ title, children, subTitle }) => {
  return (
    <Grid container flexDirection={'row'} sx={{ height: '200px' }}>
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
          <Grid item xs={10} sm={7}>
            <Box display={'flex'} gap={1} flexDirection={'column'}>
              {children}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            sx={theme => ({
              marginTop: theme.spacing(-15),
              [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(2),
              },
            })}
          >
            <Hidden smDown>
              <Typography variant='h5' pl={3} color={'primary'}>
                Proyects
              </Typography>
              <Box position={'relative'}>
                <MarcoSuperiorComponent size='small' />
                <Box
                  position={'absolute'}
                  width={'200px'}
                  height={'200px'}
                  bgcolor={theme => theme.palette.background.default}
                  sx={{
                    borderTopLeftRadius: '8px',
                  }}
                  ml={3}
                  mt={3}
                >
                  <ListMenuComponent />
                  <ColorPickerComponent
                    onColorChange1={color => console.log('color1', color)}
                    onColorChange2={color => console.log('color2', color)}
                  ></ColorPickerComponent>
                </Box>
              </Box>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
