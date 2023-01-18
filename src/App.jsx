import { Stack } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Stack
      sx={{
        width: '100vw',
        minHeight: '100vh',
        p: 5,
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#f3e5f5',
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: '55vw',
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#fff',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Stack>
    </Stack>
  );
};

export default App;
