import React from 'react';
import { Box, Container, Grid, Typography, Link, Paper } from '@mui/material';

export const BlogPost = () => {
  return (
    <Box display="flex" justifyContent="space-between" width="70%" >
      <Typography marginLeft="10px" marginTop="35px" color={"lightgrey"} variant="body1" display="block" gutterBottom sx={{ mb: 1 }}>
        Feb 6 2008
      </Typography>
      <Box sx={{width: "75%"}}>
        <Typography variant="body2">
          <Typography gutterBottom style={{ textTransform: "uppercase", fontWeight: "bold", marginBottom: "8px" }} color={"gray"}>
            Latest from the notebook
          </Typography>
          <Typography gutterBottom style={{ color: "#ed674c", fontWeight: "600" }}>
            Typophile Film Festival 5 Opening Titles
          </Typography>
          <Typography gutterBottom style={{ fontWeight: "500" }}>
            Handcrafted Typophik him restra. A nsuz typographicleast about tree lve senses, and how they contribute to and enhance our creativity." That fried ampersand looks michty tasty. Lorem Ipsum, Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum, Lorem Ipsum.
          </Typography>
        </Typography>
      </Box>
    </Box>
  )
}
