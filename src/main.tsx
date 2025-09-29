import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp';
import { Nombre } from './MyAwesomeApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp />
    {/*<Nombre/>*/}
  </StrictMode>
);
