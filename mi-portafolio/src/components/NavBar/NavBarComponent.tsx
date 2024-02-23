import { AppBar, Grid, Hidden, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import MenuIcon from '@mui/icons-material/Menu';
export const NavBarComponent = () => {
  return (
    <AppBar
      component={'nav'}
      color='transparent'
      position='sticky'
      elevation={0}
      sx={{ height: '100px' }}
    >
      <Grid container direction={'row'} height={'100px'} spacing={3}>
        <Grid item xs={3} sm={2} justifyContent={'center'} display={'flex'} alignItems={'flex-end'}>
          <IconButton color='inherit' aria-label='open drawer' edge='start'>
            <TrackChangesIcon
              color='primary'
              sx={{
                fontSize: '80px',
                '&:hover': {
                  color: 'blue',
                  fontSize: '83px',
                  backgroundColor: theme => theme.palette.background.default,
                },
                transition: 'font-size 0.3s ease-in-out',
              }}
            />
          </IconButton>
        </Grid>
        <Grid item xs />
        <Grid item xs={1.5} sm={0.5} justifyContent={'center'} display={'flex'}>
          <IconButton color='inherit' aria-label='open drawer' edge='start'>
            <MailIcon
              color='primary'
              sx={{
                '&:hover': {
                  color: 'blue',
                  fontSize: '40px',
                  backgroundColor: theme => theme.palette.background.default,
                },
                transition: 'font-size 0.3s ease-in-out',
              }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={1.5} sm={0.5} justifyContent={'center'} display={'flex'}>
          <IconButton color='inherit' aria-label='open drawer' edge='start'>
            <GitHubIcon
              color='primary'
              sx={{
                '&:hover': {
                  color: 'blue',
                  fontSize: '40px',
                  backgroundColor: theme => theme.palette.background.default,
                },
                transition: 'font-size 0.3s ease-in-out',
              }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={1.5} sm={0.5} justifyContent={'center'} display={'flex'}>
          <IconButton color='inherit' aria-label='open drawer' edge='start'>
            <SaveAltIcon
              color='primary'
              sx={{
                '&:hover': {
                  color: 'blue',
                  fontSize: '40px',
                  backgroundColor: theme => theme.palette.background.default,
                },
                transition: 'font-size 0.3s ease-in-out',
              }}
            />
          </IconButton>
        </Grid>

        <Hidden smUp>
          <Grid item xs={1} sm={0.5} justifyContent={'center'} display={'flex'}>
            <IconButton color='inherit' aria-label='open drawer' edge='start'>
              <MenuIcon
                color='primary'
                sx={{
                  '&:hover': {
                    color: 'blue',
                    fontSize: '40px',
                    backgroundColor: theme => theme.palette.background.default,
                  },
                  transition: 'font-size 0.3s ease-in-out',
                }}
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
    </AppBar>
  );
};
