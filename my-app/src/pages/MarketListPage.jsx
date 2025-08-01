import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard';

const products = Array.from({ length: 15 }, (_, i) => ({
  image: 'https://via.placeholder.com/180x120?text=Product+' + (i + 1),
  title: `Product ${i + 1}`,
  description: `Description for product ${i + 1}`,
}));

export default function MarketListPage() {
  return (
    <Box sx={{ flexGrow: 2, backgroundColor: '#ffe4ec', minHeight: '50vh', py: 4 }}>
      <Grid container spacing={5}>
        {products.map((product, idx) => (
          <Grid item xs={12} sm={4} md={4} key={idx}>
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}