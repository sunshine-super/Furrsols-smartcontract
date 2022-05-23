import * as React from 'react';
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
      width: '30%',
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
  { name: 'Background', value: 'Taiyo Ruins',action:'Sleep +8' },
  { name: 'Fure', value: 'Solana',action:'hunger +5' },
  { name: 'Eyes', value: 'Chill',action:'' },
  { name: 'Mouth', value: 'Bubblegum',action:'Hunger +3' },
  { name: 'Headgear', value: 'Moshi Hat',action:'Fun +7' },
  { name: 'Accessory', value: 'Silver Chain',action:'Hygiene +3' },
  { name: 'Toy', value: 'Lava Lamp',action:'Fun +5' },
];

const useStyles = makeStyles({
  table: {
    // width: '50%',
    backgroundColor: '#092923'
  },
});

export default function MyTable3() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell>{row.value}</StyledTableCell>
              <StyledTableCell><span style={{color:'#00FFCE'}}>{row.action}</span></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
