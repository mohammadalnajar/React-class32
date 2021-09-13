import Alert from '@material-ui/lab/Alert';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { alertStyles } from '../styles/StyledAlert';

export const AlertComponent = () => {
  const { alertContainer, alert, alertMessage } = alertStyles();
  const { errorHandler, error } = useContext(GlobalContext);
  return (
    <>
      {error.status && (
        <div className={alertContainer}>
          <Alert
            className={alert}
            severity='error'
            onClose={() => errorHandler(false)}
          >
            <p className={alertMessage}>{error.msg}</p>
          </Alert>
        </div>
      )}
    </>
  );
};
