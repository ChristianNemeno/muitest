import React from 'react';
import { Container, Typography, Button, Grid, Paper, Box, LinearProgress, Stack } from '@mui/material';


const quizData = {
    question: "Which Material-UI component is best for laying out a sequence of components in a single direction?",
    options: ["Grid", "Stack", "Paper", "Box"],
    correctAnswer: "Stack"
};

function MuiSamplePage() {
  
  const handleAnswerClick = (option) => {
    console.log(`You selected: ${option}`);
  
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2, backgroundColor: '#f7f9fc' }}>
        <Stack spacing={4}>
  
          <Box>
            <Typography variant="h6" color="text.secondary">Question 1 of 10</Typography>
            <LinearProgress variant="determinate" value={10} sx={{ mt: 1, height: 8, borderRadius: 4 }} />
          </Box>

  
          <Box sx={{ minHeight: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
            <Typography variant="h4" component="h1" align="center" fontWeight="medium">
              {quizData.question}
            </Typography>
          </Box>

          <Grid container spacing={5} justifyContent="center">
            {quizData.options.map((option, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() =>   handleAnswerClick(option)}
                  sx={{ 
                    py: 2, 
                    fontSize: '1.5rem', 
                    justifyContent: 'center',
                    
                  }}
                >
                  {option}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Paper>
    </Container>
  );
}

export default MuiSamplePage;