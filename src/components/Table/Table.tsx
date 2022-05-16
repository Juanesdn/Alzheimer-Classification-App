import {
  Paper,
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

type Data = {
  date: string;
  classification: string;
};

type HeadCell = {
  id: keyof Data;
  label: string;
};

const createData = (date: string, classification: string) => {
  return { date, classification };
};

const rows = [
  createData(new Date().toDateString(), 'Moderate'),
  createData(new Date().toDateString(), 'MildModerate'),
];

const headCells: readonly HeadCell[] = [
  { id: 'date', label: 'Fecha' },
  { id: 'classification', label: 'Clasificación' },
];

const Table = () => {
  return (
    <Paper sx={{ width: '90%', ml: 4 }}>
      <TableContainer>
        <MUITable aria-label="simple table">
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell key={headCell.id}>{headCell.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell>{row.classification}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MUITable>
      </TableContainer>
    </Paper>
  );
};

export default Table;
