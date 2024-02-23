import { Hidden, Typography } from '@mui/material';

import './App.css';
import {
  ContenedorComponent,
  MarcoInferiorComponent,
  MarcoSuperiorComponent,
} from './components/index';
import { ThemeProvider } from '@mui/system';
import { theme } from './context/theme';
import { NavBarComponent } from './components/NavBar';
import { ContenidoComponent } from './components/content';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MarcoSuperiorComponent size='large' />
        <Hidden smDown>
          <MarcoInferiorComponent />
        </Hidden>
        <ContenedorComponent>
          <NavBarComponent />
          <ContenidoComponent title='Bienvenido'>
            <Typography variant='body1' color='primary'>
              Mi nombre es Ian Dunkerley, soy un desarrollador front-end con sede en Torquay, Devon,
              Reino Unido. He desarrollado muchos tipos de interfaces, desde conocidas aplicaciones
              de DJ hasta plataformas de reservas de comercio electrónico.
            </Typography>
            <Typography variant='body1' color='primary'>
              Me apasionan las interfaces hermosas, de vanguardia y con píxeles perfectos y la UX
              implementada intuitivamente.
            </Typography>
          </ContenidoComponent>
        </ContenedorComponent>
      </ThemeProvider>
    </>
  );
}

export default App;
