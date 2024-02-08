import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import BuildCircleSharpIcon from "@mui/icons-material/BuildCircleSharp";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build"; // Suggested for construction
import GavelIcon from "@mui/icons-material/Gavel"; // Suggested for notary
import CancelIcon from "@mui/icons-material/Cancel";

const correct = <CheckIcon color="primary" />;
const wrong = <CancelIcon color="secondary" />;
function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("creates a Search profile", correct, correct, correct),
  createData("Unlimited visits", correct, correct, correct),
  createData("Visits property", correct, wrong, correct),
  createData("Checks local development plans", wrong, correct, correct),
  createData("creates a Search profile", correct, correct, correct),
  createData("creates a Search profile", correct, correct, correct),
];

export default function Buyingtable() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <TableContainer component={Paper} style={{ overflowX: "auto" }}>
        <Table
          sx={{ minWidth: isSmallScreen ? 300 : 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{width:'38%'}}>
                <b>Your Expert </b>
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0} }}
              >
                <TableCell component="th" scope="row" sx={{width:'38%' }}>
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
