import { Chip, Stack, Typography } from '@mui/material';
import { AiFillEdit } from 'react-icons/ai';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { generateRandomColorFromMUI } from '../utils/colors';

const TaskCard = ({ task }) => {
  const handleEvent = (e, name) => {
    //handle double click event
    if (e.detail === 1) {
      alert('single click', name);
    }
    //handle right click event
    if (e.detail === 1) {
      alert('double click');
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
            label={task.date}
            sx={{
              background: generateRandomColorFromMUI(),
              color: '#fff',
              height: '25px',
            }}
          />
          <AiFillEdit
            color="#9e9e9e"
            size={20}
            style={{ cursor: 'pointer' }}
            onClick={() => console.log(task.id)}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TaskCard;
