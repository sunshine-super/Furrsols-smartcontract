import React from 'react';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import { styled } from '@mui/material';

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 220,
      width: '100%',
      height: 30,
      borderRadius: 50,
      backgroundColor: '#004235 !important',
      border: '1px solid #00FFCE'
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 50,
      background: 'linear-gradient(270deg, #00FFCE 0%, #00E3FF 100%) !important',
      border: '1px solid #004235'
    },
  }),
)(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'right'
  },
});

const ProgressBtn = styled(Button)(() => ({
  borderRadius: '50px !important',
  backgroundColor: '#00FFCE !important',
  maxWidth: '100px !important',
  width: '100% !important',
  fontSize: '14px !important',
  color: '#004235 !important',
  height: '30px',
  marginLeft: '23px !important',
  fontFamily: 'Quicksand !important',
}))
interface Props {
  value: number,
  btnName: string
}
const Progress = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress variant="determinate" value={props.value} />
      <ProgressBtn><span style={{ fontWeight: '700' }}>{props.btnName}</span></ProgressBtn>
    </div>
  );
}
export default Progress;
