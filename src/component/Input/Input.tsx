import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './input.css'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        maxWidth: '72px',
        border: '1px solid rgba(0, 255, 206, 0.5)',
        borderRadius: '5px',
        height: '20px',
        position: 'relative',
        top: '2px'
      },
    },
  }),
);

export default function Input() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" variant="outlined" placeholder="Amount" />
    </form>
  );
}
