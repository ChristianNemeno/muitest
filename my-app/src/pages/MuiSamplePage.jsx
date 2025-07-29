``
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Card, CardContent, CardActions, Grid, Stack } from '@mui/material';

function MuiSamplePage() {
  return (

    <Stack direction ="row" spacing = {2}>
      <Button variant='contained'>Option 1</Button>
      <Button variant='contained'>Option 2</Button>
      <Button variant='contained'>Option 3</Button>
    </Stack>
  );
}

export default MuiSamplePage;
