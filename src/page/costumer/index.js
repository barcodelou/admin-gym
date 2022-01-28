import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import StarIcon from "@mui/icons-material/Star";
function renderRow(props) {
  const { index, style } = props;

  return (

    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <Avatar >
          <FolderIcon />
        </Avatar>
        <ListItemText primary={`Item ${index + 1}`} />
        <IconButton aria-label="delete" color="error">
          <DeleteIcon />
        </IconButton>
        <IconButton color="success" aria-label="add to shopping cart">
          <CheckCircleIcon />
        </IconButton>
        <IconButton color="warning" aria-label="add to shopping cart">
          <StarIcon />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
}
function createData(id, username, email, role, avatar, goals, membership) {
  return { id, username, email, role, avatar, goals, membership };
}
export default function Costumer() {
  const rows = [
    createData('1', 'Frozen yoghurt', 159, 6.0, 24, 4.0, 'active'),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  return (<>
    <h1 className="text-center m-4">
      User Management
    </h1>
    <p className="text-center m-4">
      Here you can manage all user
    </p>
    <div className="px-10 mx-5">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID Number</TableCell>
              <TableCell>Username</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Avatar</TableCell>
              <TableCell align="right">Goals</TableCell>
              <TableCell align="right">Membership Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.username}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.username}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.role}</TableCell>
                <TableCell align="right"> <img src={row.avatar} alt={row.avatar} /> </TableCell>
                <TableCell align="right">{row.goals}</TableCell>
                <TableCell align="right">{row.membership}</TableCell>
                <TableCell align="right">
                  <div className="flex mx-auto">
                    <button className="btn btn-warning mr-1">Edit</button>
                    <button className="btn btn-danger ml-1">Delete</button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  </>
  );
}
