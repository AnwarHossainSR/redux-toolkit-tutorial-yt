import { Stack, Typography } from '@mui/material';
import { IoMdArrowDropdown } from 'react-icons/io';
import TaskCard from './TaskCard';

const TaskSection = ({ tasks }) => {
  return (
    <Stack>
      <Stack>
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            fontWeight: 'bold',
          }}
        >
          <IoMdArrowDropdown />
          <Typography fontWeight="bold">New Tasks</Typography>
        </Stack>
        {tasks.new.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </Stack>
      <Stack>
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            fontWeight: 'bold',
          }}
        >
          <IoMdArrowDropdown />
          <Typography fontWeight="bold">Today</Typography>
        </Stack>
        {tasks.today.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </Stack>
      <Stack>
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            fontWeight: 'bold',
          }}
        >
          <IoMdArrowDropdown />
          <Typography fontWeight="bold">Upcoming</Typography>
        </Stack>
        {tasks.upcoming.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </Stack>
    </Stack>
  );
};

export default TaskSection;
