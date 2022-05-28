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

import Dialog from '@/components/Dialog/Dialog';
import { MRI, MRIResponse } from '@/types';

type HeadCell = {
  id: keyof MRIResponse;
  label: string;
};

type IMainProps = {
  mris: MRIResponse[];
};

const createData = (mri: MRI, createdAt: string) => {
  return { createdAt, mri };
};

const headCells: readonly HeadCell[] = [
  { id: 'createdAt', label: 'Fecha' },
  { id: 'mri', label: 'Clasificación' },
];

const Table = (props: IMainProps) => {
  const [rows, setRows] = useState<MRIResponse[]>([]);
  const [selectedMRI, setSelectedMRI] = useState<MRIResponse | null>(null);
  const [open, setOpen] = useState(false);

  const getSelection = (mri: MRIResponse) => {
    setSelectedMRI(mri);
    setOpen(true);
  };

  useEffect(() => {
    const data = props.mris.map((mri) => {
      return createData(mri.mri, mri.createdAt);
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
              <TableRow
                key={index}
                onClick={() => getSelection(row)}
                hover
                className="cursor-pointer"
              >
                <TableCell component="th" scope="row">
                  {moment(row.createdAt).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>{row.mri.classification}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MUITable>
      </TableContainer>
      <Dialog mri={selectedMRI} open={open} setOpen={setOpen} />
    </Paper>
  );
};

export default Table;
