import { Stack } from '@mui/material';

const App = () => {
  return (
    <Stack>
      <h1>React App</h1>
      <Stack direction="row" spacing={2}>
        <button>Button 1</button>
        <button>Button 2</button>
      </Stack>
    </Stack>
  );
};

export default App;
