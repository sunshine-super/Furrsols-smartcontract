import React from 'react';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import { styled, Tooltip } from '@mui/material';
import './index.css'

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 160,
      height: 20,
      borderRadius: 5,
      backgroundColor: '#004235 !important',
      border: '1px solid rgba(0, 255, 206, 0.5)'
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      background: 'linear-gradient(270deg, #007B64 0%, #005E69 100%) !important',
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
  borderRadius: '5px !important',
  backgroundColor: '#00FFCE !important',
  maxWidth: '70px !important',
  width: '100% !important',
  fontSize: '14px !important',
  color: '#004235 !important',
  height: '20px',
  marginLeft: '10px !important'
}))

interface Props {
  value: number,
  btnName: string
}
const Progress = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tooltip title={`Hunger: 102/110 (${props.value}%)`}>
        <BorderLinearProgress variant="determinate" value={props.value} />
      </Tooltip>
      <ProgressBtn>{props.btnName}</ProgressBtn>
      <div className="aaa"></div>
    </div>
  );
}
export default Progress;
