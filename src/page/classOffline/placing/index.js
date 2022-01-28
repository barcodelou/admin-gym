import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from "../card"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Placing() {
  return (
    <Box sx={{ flexGrow: 5, margin: 2 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} className='mx-auto'>
        {Array.from(Array(12)).map((_, index) => (
          <Grid item key={index}>
            <Card />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
