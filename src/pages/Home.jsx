import { Button, CardContent, Stack } from '@mui/material';
import TaskSection from '../components/TaskSection';
import { tasks } from '../utils/constant';

const Home = () => {
  return (
    <Stack width="100%">
      <Stack
        pb={3}
        sx={{
          borderBottom: '1px solid #4fc3f7',
        }}
      >
        <Stack width="18%">
          <Button variant="contained" sx={{ background: '#4fc3f7' }}>
            Add Task
          </Button>
        </Stack>
      </Stack>
      <CardContent>
        <TaskSection tasks={tasks} />
      </CardContent>
    </Stack>
  );
};

export default Home;
