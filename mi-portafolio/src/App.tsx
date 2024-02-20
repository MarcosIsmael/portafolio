import './App.css';
import TrianguloInferiorComponent from './components/TrianguloInferiorComponent';
import TrianguloSuperiorComponent from './components/TrianguloSuperiorComponent';
import { ThemeProvider, createTheme } from '@mui/system';

function App() {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <TrianguloSuperiorComponent />
        <TrianguloInferiorComponent />
        <div className='contenedor'></div>
      </ThemeProvider>
    </>
  );
}

export default App;
