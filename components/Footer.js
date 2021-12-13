import { COLOR_THEME } from '@/theme';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const bg = useColorModeValue('#fff', COLOR_THEME.primaryDark);

  return (
    <Box
      shadow={'md'}
      fontSize={'14px'}
      bg={bg}
      px={6}
      py={{ base: 3, md: 6 }}
      textAlign={'center'}
    >
      <Link href='/'>
        <a style={{ opacity: 0.7 }}>
          &copy; joonacode {new Date().getFullYear()}
        </a>
      </Link>
    </Box>
  );
};

export default Footer;
