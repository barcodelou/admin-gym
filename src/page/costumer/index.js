import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
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

export default function Costumer() {
  return (<>
  <h1 className="text-center m-4">
      User Management
  </h1>
  <p className="text-center m-4">
      delete for delete user, checklist for adding user to admin, start for create user to membership
  </p>
    <Box
      sx={{
        width: "100%",
        height: 400,
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <FixedSizeList
        height={400}
        width={"200%"}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
    </>
  );
}
