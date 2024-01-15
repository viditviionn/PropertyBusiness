import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import BuildCircleSharpIcon from '@mui/icons-material/BuildCircleSharp';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build'; // Suggested for construction
import GavelIcon from '@mui/icons-material/Gavel'; // Suggested for notary


const correct = <CheckIcon color='primary'/>;

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData(<><PersonIcon color='primary'/>Real State Agent</>, correct, correct, correct),
  createData(<><BuildIcon color='primary' />Construction Report</>, correct, correct, correct),
  createData('Appraisal Report', correct, correct, correct),
  createData(<><GavelIcon color='primary' />Notary</>, correct, correct, correct),
  createData('We locate 360 Service', correct, correct, correct),
  // ... rest of your rows
];

export default function Buyingtable() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <TableContainer component={Paper} style={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: isSmallScreen ? 300 : 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Your Expert </b></TableCell>
              <TableCell align="right">Transfer</TableCell>
              <TableCell align="right">Standard</TableCell>
              <TableCell align="right">Extended</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
