import { makeStyles } from '@material-ui/core/styles';

export const alertStyles = makeStyles({
  alertContainer: {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  alert: {
    display: 'flex',
    alignItems: 'center',
  },
  alertMessage: {
    margin: 0,
  },
});
