import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { ContextState } from '../Context/Context';

const AlertCom = () => {
    const { setAlert, alert } = ContextState();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert({open : false});
      };
    return (
        <>
        <Snackbar
        open={alert.open}
        autoHideDuration={1000}
        onClose={handleClose}
        message={alert.message}>
            <Alert variant="filled" severity={alert.type} elevation={10}>
                {alert.message}
            </Alert>
        </Snackbar>   
        </>
    )
}

export default AlertCom
