import React from 'react';
import { Box, Container, Grid, Typography, Link, Paper } from '@mui/material';


export const SideBar = () => {
  return (
    <Grid style={{width: "20%"}} item xs={12} md={4}>
      <Typography textTransform="uppercase" fontWeight="600" color="gray" gutterBottom sx={{ mb: 2 }}>
        Recent Work
      </Typography>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          MTV
        </Typography>
        <Typography variant="body2">
          XHTML + CSS development
        </Typography>
      </Paper>
    </Grid>
  )
}
