import React from 'react';
import { AppBar, Tabs, Tab, Box, Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

interface Book {
  title: string;
  author: string;
  price: string;
  imageUrl: string;
}

const books: Book[] = [
  {
    title: "Twenty Bits I Learned About Making Websites",
    author: "Dan Cederholm",
    price: "$5.00",
    imageUrl: "path/to/your/image.jpg",
  },
  // ... other books
];

export const BookStorePage = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab label="All" />
          {/* ... other categories */}
          <Tab label="Books" />
          {/* ... other categories */}
        </Tabs>
      </AppBar>
      
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={book.imageUrl}
                alt={book.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  by {book.author}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  from {book.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
