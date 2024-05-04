import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import nursesData from '../data/nurses.json';

const NurseList: React.FC = () => {
  return (
    <>
      <h1>Список медсестер</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ФИО</TableCell>
              <TableCell align="right">Отделение</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nursesData.map((nurse: { name: string, department: string }, index: number) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {nurse.name}
                </TableCell>
                <TableCell align="right">{nurse.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default NurseList;
