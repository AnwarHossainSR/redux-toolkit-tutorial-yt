import { Button, Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};

export default function CustomModal({ open, setOpen }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create New Task
          </Typography>
          <Stack
            id="modal-modal-description"
            sx={{ mt: 2 }}
            display="flex"
            direction="column"
            spacing={2}
          >
            <TextField fullWidth label="Task Name" />
            <TextField fullWidth type="date" mt={2} />
            <Button variant="contained" sx={{ background: '#4fc3f7', mt: 2 }}>
              Create
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
