import React from 'react';
import './simpleBits.css'; // Make sure to create this CSS file
import { Box, Container, Grid, Typography, Link, Paper } from '@mui/material';
import { BlogPost, SideBar } from '../../components';

export const SimpleBits = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Box marginBottom="45px" gap={2} display={'flex'} justifyContent={"center"}>
        <Typography variant="h4" className='pageTitle'>
          Handcrafted pixels
        </Typography>
        <Typography variant="h4" className='pageTitleSymbol'>
          &
        </Typography>
        <Typography variant="h4" className='pageTitle'>
          text from Salem, Massachusetts.
        </Typography>
      </Box>
      <Box height={'0.7px'} width={"100%"} sx={{ backgroundColor: "#D3D3D3" }} />
      <Box marginTop="30px" display={"flex"} justifyContent='space-between'>
        <BlogPost></BlogPost>
        <SideBar></SideBar>
      </Box>
      <Box height={'0.7px'} width={"100%"} sx={{ backgroundColor: "#D3D3D3" }} marginTop="30px" />
      <Box marginTop="30px" display={"flex"} justifyContent='space-between'>
        <BlogPost></BlogPost>
        <SideBar></SideBar>
      </Box>
      <Box height={'0.7px'} width={"100%"} sx={{ backgroundColor: "#D3D3D3" }} marginTop="30px" />
      <Box marginTop="30px" display={"flex"} justifyContent='space-between'>
        <BlogPost></BlogPost>
        <SideBar></SideBar>
      </Box>
      <Box height={'0.7px'} width={"100%"} sx={{ backgroundColor: "#D3D3D3" }} marginTop="30px" />
      <Box marginTop="30px" display={"flex"} justifyContent='space-between'>
        <BlogPost></BlogPost>
        <SideBar></SideBar>
      </Box>
    </Container>
  );
};

