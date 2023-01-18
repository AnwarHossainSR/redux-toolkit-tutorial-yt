import { Chip, Stack, Typography } from '@mui/material';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { generateRandomColorFromMUI } from '../utils/colors';

const TaskCard = ({ task }) => {
  const handleEvent = (e, name) => {
    //handle double click event
    if (e.detail === 2) {
      console.log(name);
    }
  };
  return (
    <Stack>
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 1,
          }}
          onClick={(e) => handleEvent(e, task.name)}
        >
          <HiOutlineCheckCircle color="#616161" size={24} />
          <Typography color="#616161">{task.name}</Typography>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 1,
          }}
        >
          <Chip
            label="Chip Filled"
            sx={{ background: generateRandomColorFromMUI(), color: '#fff' }}
          />
          <Typography color="#00bfa5">{task.date}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TaskCard;
