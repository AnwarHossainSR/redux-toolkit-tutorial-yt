import { Button, CardContent, Stack } from '@mui/material';
import { useState } from 'react';
import CustomModal from '../components/CustomModal';
import TaskSection from '../components/TaskSection';
import { tasks } from '../utils/constant';

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack width="100%">
      <Stack
        pb={3}
        sx={{
          borderBottom: '1px solid #4fc3f7',
        }}
      >
        <Stack width="18%">
          <Button
            variant="contained"
            sx={{ background: '#4fc3f7' }}
            onClick={() => setOpen(true)}
          >
            Add Task
          </Button>
        </Stack>
      </Stack>
      <CardContent>
        <TaskSection tasks={tasks} />
      </CardContent>
      {
        open && <CustomModal open={open} setOpen={setOpen} />
        // <CustomModal open={open} setOpen={setOpen} />
      }
    </Stack>
  );
};

export default Home;
