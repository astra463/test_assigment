import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import doctorsData from '../data/doctors.json';

const DoctorList: React.FC = () => {
  return (
    <>
      <h1>Список врачей</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ФИО</TableCell>
              <TableCell align="right">Отделение</TableCell>
              <TableCell align="right">Заведующий</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctorsData.map((doctor: { name: string, department: string, isHead: boolean }, index: number) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {doctor.name}
                </TableCell>
                <TableCell align="right">{doctor.department}</TableCell>
                <TableCell align="right">{doctor.isHead ? 'Да' : 'Нет'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DoctorList;
