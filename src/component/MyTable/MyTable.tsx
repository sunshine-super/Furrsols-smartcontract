import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  { name: 'Breed Count', value: '0 out of 3' },
  { name: 'Owner', value: 'HECE...DhJx' },
];

const useStyles = makeStyles({
  table: {
    // width: '50%',
    backgroundColor: '#092923'
  },
});

interface Props {
  fluff_count: number,
  weather: string
}
const MyTable = (props: Props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row"><span style={{ color: '#00FFCE' }}>Classes</span></StyledTableCell>
            <StyledTableCell><span style={{ color: '#00FFCE' }}>{props.weather}</span></StyledTableCell>
          </StyledTableRow>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell>{row.value}</StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <StyledTableCell component="th" scope="row"><span style={{ color: '#00FFCE' }}>FLUFF</span></StyledTableCell>
            <StyledTableCell><span style={{ color: '#00FFCE' }}>{props.fluff_count}</span></StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyTable;
