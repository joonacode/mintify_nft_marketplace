import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import LogoSvg from './LogoSvg';

const Logo = () => {
  const bg = useColorModeValue('#22B9CA', '#38F2AF');

  return (
    <Link href={'/'} passHref>
      <Flex cursor={'pointer'} alignItems={'center'}>
        <Box>
          <LogoSvg color={bg} />
        </Box>
        <Heading color={bg} size={'md'} ml={1}>
          Mintify
        </Heading>
      </Flex>
    </Link>
  );
};

export default Logo;
