
import './App.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import { Rating } from '@mui/material';
import RatingDemo from './RatingDemo';

// export default function ButtonUsage() {
//   return <Button variant="contained">Hello world</Button>;
// }

function App() {


  return (
    <>
      <div>
        <h1>Hello There!</h1>
        <Button color='secondary' variant="contained">Hello world</Button>
        <Button color="error" variant="outlined">Hello world</Button>
        <Button color="success" variant="text">Hello world</Button>
      </div>
      <RatingDemo />

    </>
  )
}

export default App
