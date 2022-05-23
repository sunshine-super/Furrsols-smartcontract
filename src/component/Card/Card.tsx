import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  styled,
  Typography,
  CardActionArea,
  CardContent,
  Card
} from '@mui/material';

const Title1 = styled(Typography)(() => ({
  color: 'white !important',
  fontSize: '14px !important',
  fontFamily: 'FFF Forward !important',
  lineHeight: '35px'
}))
const Title2 = styled(Typography)(() => ({
  color: '#00FFCE !important',
  fontSize: '16px !important',
  fontFamily: 'FFF Forward !important'
}))
const Content = styled(Typography)(() => ({
  color: 'white !important',
  fontSize: '13px !important',
  fontFamily: 'Quicksand !important'
}))

const useStyles = makeStyles({
  root: {
    maxWidth: 390,
    backgroundColor: '#12232A !important',
    borderRadius: '18px !important',
    marginBottom: '10px'
  },
  actionarea: {
    padding: '28px 20px!important',
    marginBottom: '10px'
  }
});

interface Props {
  firsttitle: string,
  secondtitle: string,
  content: string
}

const MediaCard = (props: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionarea}>
        <CardContent>
          <Title1>{props.firsttitle}</Title1>
          <Title2>{props.secondtitle}</Title2>
          <div style={{ marginBottom: '40px' }} />
          <Content>
            {props.content}
          </Content>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default MediaCard;