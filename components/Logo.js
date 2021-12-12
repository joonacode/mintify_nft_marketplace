import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import LogoSvg from './LogoSvg';

const Logo = () => {
  return (
    <Flex alignItems={'center'}>
      <Box pos='relative' top={'2px'}>
        <LogoSvg />
      </Box>
      <Heading color={'#22B9CA'} size={'md'} ml={1}>
        Mintify
      </Heading>
    </Flex>
  );
};

export default Logo;
