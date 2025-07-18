
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Card, CardContent, CardActions, Grid } from '@mui/material';

function MuiSamplePage() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI Sample
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {[...Array(6)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Card {index + 1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a sample card. You can put any content you want here.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default MuiSamplePage;
