import { fake_list } from '@/fake_data';
import { Box, Grid, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import CardItem from './CardItem';

const CardList = () => {
  return (
    <Box bg='#fff' padding={'14px'} rounded='lg'>
      <SimpleGrid columns={4} spacing={6}>
        {fake_list.map((data, i) => (
          <CardItem data={data} key={i} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CardList;
