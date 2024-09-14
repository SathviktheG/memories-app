
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0.5), // Reduced spacing for a smaller look
    },
  },
  paper: {
    padding: theme.spacing(1), // Reduced padding for a more compact form
    maxWidth: '400px', // Limit the width of the paper
    margin: 'auto', // Center the form
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '95%', // Slightly reduced width
    margin: '8px 0', // Reduced margin for a more compact appearance
    height: '80px', // Adjust height as needed
    border: '2px dashed #0087F7', // Border styling
    borderRadius: '5px', // Border radius
    padding: '5px', // Reduced padding
    textAlign: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  buttonSubmit: {
    margin: theme.spacing(1, 0), // Adjusted margin for spacing between buttons
  },
}));

export default useStyles;
