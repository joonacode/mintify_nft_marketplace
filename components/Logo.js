import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import LogoSvg from './LogoSvg';

const Logo = () => {
  const bg = useColorModeValue('#22B9CA', '#38F2AF');

  return (
    <Flex alignItems={'center'}>
      <Box pos='relative' top={'2px'}>
        <LogoSvg color={bg} />
      </Box>
      <Heading color={bg} size={'md'} ml={1}>
        Mintify
      </Heading>
    </Flex>
  );
};

export default Logo;
