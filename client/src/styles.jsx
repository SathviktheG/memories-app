import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBarContent: {
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    margin:0,
    display:'inline',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]:{
    mainContainer:{
      flexDirection:"column-reverse"
    }
  }
}));

export default useStyles;