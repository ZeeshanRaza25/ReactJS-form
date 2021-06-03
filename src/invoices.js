import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Link from "@material-ui/core/Link";
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#efefef"
  },
  body: {
    fontSize: 14
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(invoiceId, toClient, amount, dueDate, purchaseOrder,) {
  return { invoiceId, toClient, amount, dueDate, purchaseOrder, };
}

const rows = [
  createData("MIPLSULER001", "Braze Limited", "24 GBP", "20/02/2021", 159,),
  createData("MIPLSULER002", "Braze Limited", "74 GBP", "20/02/2021", 237,),
  createData("MIPLSULER003", "Braze Limited", "53 GBP", "20/02/2021", 262,)
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
    margin: theme.spacing(2, 0)
  }
}));

export default function TableComponent() {
  const classes = useStyles();
  console.log('====================================');
  console.log("rows", rows);
  console.log('====================================');
  return (
    <TableContainer style={{ marginTop: '30px' }}>
      <Paper className={classes.paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Invoice ID</StyledTableCell>
              <StyledTableCell>To Client</StyledTableCell>
              <StyledTableCell >Amount</StyledTableCell>
              <StyledTableCell>Due Date</StyledTableCell>
              <StyledTableCell>Proposal Document</StyledTableCell>
              <StyledTableCell>View Invoice</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.invoiceNumber}>
                <StyledTableCell>{row.invoiceId}</StyledTableCell>
                <StyledTableCell>{row.toClient}</StyledTableCell>
                <StyledTableCell>
                  {row.amount}
                </StyledTableCell>
                <StyledTableCell>{row.dueDate}</StyledTableCell>
                <StyledTableCell>{row.dueDate}</StyledTableCell>
                <StyledTableCell>
                  <Link href="#">View</Link>
                </StyledTableCell>
                <StyledTableCell>
                  <Link href="#">View</Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </TableContainer>
  );
}
