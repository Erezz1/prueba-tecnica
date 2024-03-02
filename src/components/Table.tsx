import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  IconButton,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table as Tables,
} from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

interface Props {
  employees: Employee[];
}
export const Table: FC<Props> = ({ employees }) => {

  const navigate = useNavigate();

  const handleClickEdit = (id: string) => navigate(`/edit/${id}`)
  const handleClickDetails = (id: string) => navigate(`/details/${id}`)

  return (
    <TableContainer>
      <Tables sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Apellido Paterno</TableCell>
            <TableCell align="center">Apellido Materno</TableCell>
            <TableCell align="center">Fecha de nacimiento</TableCell>
            <TableCell align="center">Ver</TableCell>
            <TableCell align="center">Editar</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {employees.map(employee => (
            <TableRow
              key={employee.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {employee.empName}
              </TableCell>
              <TableCell align="center">
                {employee.empFirstName}
              </TableCell>
              <TableCell align="center">
                {employee.empLastName}
              </TableCell>
              <TableCell align="center">
                {employee.empBirthDate}
              </TableCell>
              <TableCell align="center">
                <IconButton
                  aria-label="details"
                  color="default"
                    style={{
                    border: '1px solid grey',
                    borderRadius: '10px',
                    color: 'black'
                  }}
                  onClick={() => handleClickDetails(employee.id)}
                >
                  <RemoveRedEyeIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <IconButton
                  aria-label="see"
                  color="default"
                  style={{
                    border: '1px solid grey',
                    color: 'black'
                  }}
                  onClick={() => handleClickEdit(employee.id)}
                >
                  <ModeEditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Tables>
    </TableContainer>
  )
}
