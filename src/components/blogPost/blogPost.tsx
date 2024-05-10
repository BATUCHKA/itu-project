import React from 'react';
import { Box, Typography } from '@mui/material';

export const BlogPost = ({ date, title, description }: { date: string, title: string, description: string }) => {
  return (
    <Box display="flex" justifyContent="space-between" width="70%" >
      <Typography marginLeft="10px" marginTop="35px" color="lightgrey" variant="body1" display="block" gutterBottom sx={{ mb: 1 }}>
        {date}
      </Typography>
      <Box sx={{ width: "75%" }}>
        <Typography variant="body2">
          <Typography gutterBottom style={{ color: "#ed674c", fontWeight: "600" }}>
            {title}
          </Typography>
          <Typography gutterBottom style={{ fontWeight: "500" }}>
            {description}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
