import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextInput, SimpleForm } from 'react-admin';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme2 = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        backgroundColor: '#d41458',
        borderRadius: 3,
        border: 0,
        color: 'blue',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});


export default function ChoosePassword({ open, handleClose, theme }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create Password</DialogTitle>
          <DialogContent>
            <DialogContentText>
            To create your password, please enter an new password here.
            </DialogContentText>
            <SimpleForm>
              <TextInput
                id="input1"
                autoFocus
                margin="dense"
                label="password"
                type="password"
                fullWidth
                source="password"
                required
              />
              {/* <TextInput source="password" fullWidth autoComplete="off" />
              <TextInput
                autoFocus
                margin="dense"
                label="password"
                type="password"
                fullWidth
                source="input1"
                required
              /> */}
            </SimpleForm>
          </DialogContent>
          <DialogActions>
            <ThemeProvider theme={theme2}>
              <Button onClick={handleClose} color="primary">
            Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
            Save Password
              </Button>
            </ThemeProvider>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
