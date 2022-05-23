import * as React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Arrow from '@material-ui/icons/ArrowForward';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      padding: '5px',
      border: '1px solid #021B1A',
      width: '50%',
      color: 'white',
      lineHeight: '15px'
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: "#09332B",
      },
    },
  }),
)(TableRow);

const rows = [
  { name: 'Hunger', value: '110', plus: '120' },
  { name: 'Sleep', value: '104', plus: '115' },
  { name: 'Hygiene', value: '103', plus: '108' },
  { name: 'Fun', value: '113', plus: '123' },
];
const useStyles = makeStyles({
  table: {
    // width: '50%',
    backgroundColor: '#092923'
  },
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100px',
    alignItems: 'center'
  }
});

interface Props {
  isupgrade: boolean
}

const MyTable2 = (props: Props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell className={classes.style}>
                <div>{row.value}</div>
                {props.isupgrade ? <Arrow style={{ color: '#00FFCE' }} /> : ''}
                <div>{props.isupgrade ? <span style={{ color: '#00FFCE' }}>{row.plus}</span> : ''}</div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default MyTable2;