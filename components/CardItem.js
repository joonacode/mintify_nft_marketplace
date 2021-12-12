import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const CardItem = ({ data }) => {
  function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <Box
      _hover={{ shadow: 'lg', transition: '.2s ease-in-out', top: '-10px' }}
      position={'relative'}
      transition={'.5s ease-in-out'}
      rounded={'lg'}
      overflow={'hidden'}
      shadow={'md'}
    >
      <Box
        justifyContent={'center'}
        display={'flex'}
        alignItems={'flex-end'}
        pos='relative'
        h={'156px'}
        bg={generateRandomColor()}
      >
        <Box bottom={'-5px'} pos='relative'>
          <Image
            height={140}
            width={140}
            src={`https://avatars.dicebear.com/api/open-peeps/${data.username}.svg`}
            alt='2'
          />
        </Box>
      </Box>
      <Box p={4} minH='110px'>
        <Text mb={1}>{data.username}</Text>
        <Text color='#22B9CA' fontSize={'sm'}>
          {data.last_name}
        </Text>
      </Box>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        p={4}
        borderTop={'1px solid #F2F2F2'}
      >
        <Text size='sm'>Fixed Price</Text>
        <Button
          size={'sm'}
          variant='outline'
          colorScheme={'blackAlpha'}
          rounded={'3xl'}
        >
          0.001 ETH
        </Button>
      </Flex>
    </Box>
  );
};

export default CardItem;
