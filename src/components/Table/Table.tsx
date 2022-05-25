import {
  Paper,
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';

import { MRIResponse } from '@/types';

type Data = {
  date: string;
  classification: string;
};

type HeadCell = {
  id: keyof Data;
  label: string;
};

type IMainProps = {
  mris: MRIResponse[];
};

const createData = (date: string, classification: string) => {
  return { date, classification };
};

const headCells: readonly HeadCell[] = [
  { id: 'date', label: 'Fecha' },
  { id: 'classification', label: 'Clasificación' },
];

const Table = (props: IMainProps) => {
  const [rows, setRows] = useState<Data[]>([]);

  useEffect(() => {
    const data = props.mris.map((mri) => {
      return createData(mri.createdAt, mri.mri.classification);
    });
    setRows(data);
  }, [props.mris]);

  return (
    <Paper sx={{ width: '90%', ml: 4, overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <MUITable stickyHeader aria-label="classification table">
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
                  {moment(row.date).format('DD/MM/YYYY')}
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
